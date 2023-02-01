const express = require("express");
const multer = require("multer"); // Upload file
const morgan = require("morgan"); // Logger
const jwt = require("jsonwebtoken"); // Authentication user - Authorization user

const app = express();

//Request -> Middleware -> Handler (app.post..) -> Middleware/Interceptor -> Reponse
//Request -> Morgan -> Custom middleware -> Handler -> Response

function middlewareCustom(req, res, next) {
  console.log("middleware");
  next();
}

app.use(morgan("tiny"));
app.use("/user", middlewareCustom);

app.use(express.json());

app.post("/", (req, res) => {
  console.log("req.body :>> ", req.body);
  res.send("ok");
});

app.patch("/user", (req, res) => {
  console.log("In route");
  res.send("ok");
});

app.listen(3000);
