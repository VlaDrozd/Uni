const { Router } = require("express");
const Car = require("../db/tables/car.model");
const Favourite = require("../db/tables/favourite.model");
const authCheck = require("../middleware/auth.middleware");
const router = Router();

// api/fav/addFavourite
router.post("/addFavourite", authCheck, async (req, res) => {
    try {
        const carId = req.body.carId;
        const userId = req.userId;

        if (!carId || !userId) {
            return res.status(401).json({ message: 'Incorrect data' });
        }

        const car = await Car.findById(carId);

        if (!car) {
            return res.status(400).json({ message: 'No car' });
        }

        const fav = new Favourite({
            userId: userId,
            carId: car.id
        });

        fav.save();

        res.status(201).json({ message: 'Success' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error' })
    }
});


// /api/fav/getFavourites
router.get('/getFavourites', authCheck, async (req, res) => {
    try {
        const userId = req.userId;

        if (!userId) {
            return res.status(401).json({ message: 'Incorrect data' });
        }

        const favsList = await Favourite.find({ userId });

        if (!favsList) {
            return res.status(401).json({ message: 'Incorrect data' });
        }

        res.status(200).json({ list: favsList });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error' })
    }
})

// /api/fav/deleteFavourite
router.post('/deleteFavourite', authCheck, async (req, res) => {
    try {
        const userId = req.userId;
        const favId = req.body.favId;

        if (!userId || !favId) {
            return res.status(401).json({ message: 'Incorrect data' });
        }

        const fav = await Favourite.findOneAndDelete({ userId: userId, _id: favId });

        if (!fav) {
            return res.status(401).json({ message: 'Incorrect data' });
        }

        res.status(200).json({ message: 'Success' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error' })
    }
})

module.exports = router;