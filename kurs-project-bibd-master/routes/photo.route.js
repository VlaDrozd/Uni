const { Router } = require("express");
const Photo = require("../db/tables/photo.model");
const router = Router();

module.exports = router;

// api/photo/:path
router.get("", async (req, res) => {
    try {
      const path = req.query.path;
    
      if(!path) {
        res.status(404).send();
      }

      res.sendFile(process.cwd() + '/' + path);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something wrong" });
    }
  });

