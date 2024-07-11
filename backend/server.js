require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const campaignRoutes = require("./routes/campaigns");
const stockRoutes = require("./routes/stocks");
const discountRoutes = require("./routes/discounts");
const imageModel = require("./models/ImageModel");
const fs = require("fs");

//express app
const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/campaigns", campaignRoutes);
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app" });
});

app.use("/api/stocks", stockRoutes);
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app" });
});

app.use("/api/discounts", discountRoutes);
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app" });
});

/*const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/", upload.single("testImage"), (req, res) => {
  const saveImage = new imageModel({
    name: req.name,
    img: {
      data: fs.readFileSync("uploads/" + req.file.filename),
      contentType: "image/jpg",
    },
  });
  saveImage
    .save()
    .then((res) => {
      console.log("image is saved");
    })
    .catch((err) => {
      console.log("it has an error", err);
    });
  res.send("image is saved");
});

app.get("/", async (req, res) => {
  const allData = await imageModel.find();
  res.json(allData);
});*/

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })

  .catch((error) => {
    console.log(error);
  });

module.exports = app;

//process.env
