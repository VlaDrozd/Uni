const jwt = require('jsonwebtoken');
const User = require('../db/tables/user.model');

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: "No auth" });
        }

        const decoded = jwt.verify(token, 'aezakme');
        req.userId = decoded.userId;

        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(400).json({ message: "Not Exists" });
        }

        req.isAdmin = user.isAdmin;
        req.userId = user.id;

        next()

    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "No auth" });
    }
}