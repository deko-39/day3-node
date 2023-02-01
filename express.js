const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");

const app = express();

app.use(bodyParser.json());

// POST -> tạo ra bản ghi mới -> CREATE
// GET -> tìm kiếm các bản ghi -> RETRIEVE
// PUT -> update toàn bộ data trong bản ghi -> UPDATE
// PATCH -> update 1 phần nhỏ của bản ghi -> UPDATE
// DELETE -> xoá bản ghi -> DELETE

// API update
app.post("/", (req, res, next) => {
  res.send("ok");
});

// Thành phần req -> req.body, req.params, req.query, req.headers
app.get("/", (req, res, next) => {
  console.log(req.headers);
  console.log(req.params);
  console.log(req.query);
});

app.post("/", (req, res, next) => {
  console.log(req.headers);
  console.log(req.body);
  console.log(req.params);
});

app.patch("/", (req, res, next) => {
  console.log(req.headers);
  console.log(req.body);
  console.log(req.params);
});

app.put("/", (req, res, next) => {
  console.log(req.headers);
  console.log(req.body);
  console.log(req.params);
});

app.delete("/", (req, res, next) => {
  console.log(req.headers);
  console.log(req.params);
  console.log(req.query);
});

app.all("/", (req, res, next) => {
  // Nhận tất cả method
});

app.listen(3000);
