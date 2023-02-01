const express = require("express");
const { Types } = require("mongoose");

const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/express");

//Schema
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    name: mongoose.Schema.Types.String, //String
    age: mongoose.Schema.Types.Number, // Number
    address: mongoose.Schema.Types.String, // String
    object: mongoose.Schema.Types.Mixed, // Any
    album: [
      {
        id: mongoose.Schema.Types.String,
        name: mongoose.Schema.Types.String,
        author: mongoose.Schema.Types.String,
        kind: mongoose.Schema.Types.String,
      },
    ],
  },
  { versionKey: false }
);

//Model
const userModel = mongoose.model("User", userSchema); // Collection User

const userRouter = express.Router();

app.use("/users", userRouter);

//Save to database
userRouter.post("/", async (req, res, next) => {
  try {
    const user = await userModel.create({
      name: "Tam2",
      age: 20,
      address: "ha Noi",
      albums: {
        song1: "LLLL",
      },
    });

    user.save();
    res.send(user);
  } catch (error) {}
});

userModel.find(); // Get all

userModel.deleteOne({ name: "Tam" }); // Xoa user ten la Tam

const user = await userModel.find({ name: "Tam" });
user.address = "afkajfkjf";
user.save();

app.listen(3000);
