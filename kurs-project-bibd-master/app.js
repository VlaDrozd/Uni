const express = require("express");
const server = express();
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require('dotenv').config()


server.use(express.json({ extended: true }));
server.use(cors());


server.use(express.static(__dirname + "/kursach/dist/kursach"));
server.get("/app", (req, res) => {
  res.sendFile(__dirname + "/kursach/dist/kursach/index.html");
});

// /api/auth
server.use("/api/auth", require("./routes/auth.route"));

// /api/cars
server.use("/api/cars", require("./routes/car.route"));

// /api/photo
server.use("/api/photo", require("./routes/photo.route"));

// /api/orders
server.use("/api/orders", require("./routes/oreders.route"));

// /api/fav
server.use("/api/fav", require("./routes/favourite.route"));

async function Start() {
  try {
    await mongoose.connect(
      process.env.MONGO_CONNECT,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      }
    );
    const PORT = process.env.PORT ?? 8080;
    server.listen(PORT, () => {
      console.log(`server started on port ${PORT}`);
    });
  } catch (e) {
    console.log("Error", e);
    process.exit(1);
  }
}

Start();
