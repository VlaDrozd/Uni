const { Router } = require("express");
const Car = require("../db/tables/car.model");
const Photo = require("../db/tables/photo.model");
const Favourites = require("../db/tables/favourite.model");
const Orders = require("../db/tables/order.model");
const authCheck = require("../middleware/auth.middleware");
const router = Router();
const carPhotoMiddleware = require("../middleware/carPhoto.middleware");

module.exports = router;

// api/cars/getCarsList
router.get("/getCarsList", async (req, res) => {
  try {
    const offset = +req.query.offset ?? 0;
    const filters = createFilters(req.query);
    const cars = await Car.paginate(
      { active: true, ...filters },
      { offset, limit: 10 }
    );
    const resPage = cars.docs.map((el) => {
      return {
        concern: el.concern,
        model: el.model,
        mileage: el.mileage,
        fuel: el.fuel,
        photo: el.photoPath,
        year: el.year,
        price: el.price,
        id: el.id,
      };
    });
    res.status(200).json({ cars: resPage });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something wrong" });
  }
});

// api/cars/addNewCar
router.post("/addNewCar", authCheck, carPhotoMiddleware, async (req, res) => {
  try {
    const carOptions = {
      concern: req.body.concern,
      model: req.body.model,
      fuel: req.body.fuel,
      year: +req.body.year,
      mileage: +req.body.mileage,
      info: req.body.info,
      price: +req.body.price,
      ownerID: req.userId,
    };

    const preview = req.files["photo"][0];

    if (!preview) {
      return res.status(401).json({ message: "No photos" });
    }

    const newCar = new Car({
      ...carOptions,
      photoPath: preview.path,
    });

    await savePhotos(preview, newCar.id);

    await newCar.save();

    res.status(201).json({ message: "Created", id: newCar.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something wrong" });
  }
});

// api/cars/getCar
router.get("/getCar", authCheck, async (req, res) => {
  try {
    const carId = req.query.carId;

    if (!carId) {
      return res.status(400).json({ message: 'error1' });
    }

    const car = await Car.findById(carId);

    if (!car) {
      return res.status(400).json({ message: 'error2' });
    }

    res.status(201).json({ car });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something wrong" });
  }
});

// api/cars/getMyCars
router.get("/getMyCars", authCheck, async (req, res) => {
  try {

    if (!req.userId) {
      return res.status(400).json({ message: 'error' });
    }

    const cars = await Car.find({
      ownerID: req.userId
    });

    if (!cars) {
      return res.status(400).json({ message: 'error' });
    }

    res.status(201).json({ cars });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something wrong" });
  }
});

// api/cars/deleteCar
router.post('/deleteCar', authCheck, async (req, res) => {
  try {
    const userId = req.userId;
    const carId = req.body.carId;


    if (!userId || !carId) {
      return res.status(401).json({ message: 'Incorrect data1' });
    }

    const car = await Car.findOneAndDelete({ ownerID: userId, _id: carId });

    if (!car) {
      return res.status(401).json({ message: 'Incorrect data2' });
    }

    await Favourites.deleteMany({ carId: car.id });
    await Orders.deleteMany({ carId: car.id });

    res.status(200).json({ message: 'Success' });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'error' })
  }
})


async function savePhotos(preview, id) {
  const previewPhoto = new Photo({
    fileName: preview.path,
    carId: id,
    type: "preview",
  });
  await previewPhoto.save();
}

const createFilters = (params) => {
  const {
    concern = null,
    fuel = null,
    minYear = null,
    maxYear = null,
    minMileage = null,
    maxMileage = null,
    minPrice = null,
    maxPrice = null,
  } = params;

  const filters = {};
  concern && (filters.concern = concern);
  fuel && (filters.fuel = fuel);
  (minYear || maxYear) && (filters.year = getMaxMinFilter(+minYear, +maxYear));
  (minMileage || maxMileage) && (filters.mileage = getMaxMinFilter(+minMileage, +maxMileage));
  (minPrice || maxPrice) && (filters.price = getMaxMinFilter(+minPrice, +maxPrice));
  return filters;
};


const getMaxMinFilter = (min, max) => {
  let filters = {};
  if (min) {
    filters.$gte = min;
  }
  if (max) {
    filters.$lte = max;
  }
  return filters;
}