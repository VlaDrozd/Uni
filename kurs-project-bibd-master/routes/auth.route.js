const { Router } = require("express");
const User = require("../db/tables/user.model");
const bcript = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const authCheck = require('../middleware/auth.middleware');
const router = Router();

module.exports = router;

// /api/user/register
router.post(
  "/register",
  [
    check("email", "Incorrect Email").isEmail(),
    check("password", "Password length leth than 8 symbols").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password, name, surname } = req.body;

      const checkEmail = await User.findOne({ email });

      if (checkEmail) {
        return res.status(500).json({ message: "Exists" });
      }

      const passwordHash = await bcript.hash(password, 12);
      const newUser = new User({
        email,
        name,
        surname,
        password: passwordHash,
      });

      await newUser.save();

      res.status(201).json({ message: "Created" });
    } catch (e) {
      res.status(500).json({ message: "Something wrong" });
    }
  }
);

// /api/auth/login
router.post(
  "/login",
  [
    check("email", "Incorrect Email").normalizeEmail().isEmail(),
    check("password", "No password").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "Not Exists" });
      }

      const checkPass = await bcript.compare(password, user.password);

      if (!checkPass) {
        return res.status(400).json({ message: "Incorrect password" });
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "12h",
      });

      res.json({ token, isAdmin: user.isAdmin });
    } catch (e) {
      res.status(500).json({ message: "Something wrong" });
    }
  }
);

// /api/auth/isAdmin
router.get("/isAdmin", authCheck, async (req, res) => {
  try {
    return res.status(200).json({ isAdmin: req.isAdmin });
  } catch (e) {
    res.status(500).json({ message: "Something wrong" });
  }
});
