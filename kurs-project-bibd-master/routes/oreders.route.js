const { Router } = require("express");
const Car = require("../db/tables/car.model");
const Order = require("../db/tables/order.model");
const authCheck = require("../middleware/auth.middleware");
const router = Router();

// api/orders/addOrder
router.post("/addOrder", async (req, res) => {
    try {
        const phone = req.body.phone;
        const carId = req.body.carId;
        const price = req.body.price;

        if (!phone || !carId || !price) {
            return res.status(401).json({ message: 'Incorrect data' });
        }

        const car = await Car.findById(carId);

        if (!car) {
            return res.status(400).json({ message: 'No car' });
        }

        const order = new Order({
            phone,
            price,
            ownerId: car.ownerID,
            carId: car.id
        });

        order.save();

        res.status(201).json({ message: 'Success' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error' })
    }
});


// /api/orders/getOrders
router.get('/getOrders', authCheck, async (req, res) => {
    try {
        const userId = req.userId;

        if (!userId) {
            res.status(401).json({ message: 'Incorrect data' });
        }

        const ordersList = await Order.find({ ownerId: userId, isOpened: true });

        if (!ordersList) {
            res.status(401).json({ message: 'Incorrect data' });
        }

        res.status(200).json({ list: ordersList });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error' })
    }
})

// /api/orders/closeOrder
router.post('/closeOrder', authCheck, async (req, res) => {
    try {
        const userId = req.userId;
        const orderId = req.body.orderId;

        if (!userId || !orderId) {
            return res.status(401).json({ message: 'Incorrect data1' });
        }

        const order = await Order.findOneAndUpdate({ ownerId: userId, _id: orderId }, {isOpened: false});   

        if(!order) {
            return res.status(401).json({ message: 'Incorrect data2' });
        }  

        res.status(200).json({ message: 'Success' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error' })
    }
})

module.exports = router;