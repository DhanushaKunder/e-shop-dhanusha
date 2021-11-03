"use strict";

var _this = void 0;

var express = require("express");

var app = express();

var mongoose = require("mongoose");

var dotenv = require("dotenv");

var userRoute = require("./routes/user");

var authRoute = require("./routes/auth");

var productRoute = require("./routes/product");

var cartRoute = require("./routes/cart");

var orderRoute = require("./routes/order");

var stripeRoute = require("./routes/stripe");

var cors = require("cors");

var path = require('path');

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(function () {
  return console.log("DB Connection Successfull!");
})["catch"](function (err) {
  console.log(err);
});
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute); // const PORT= process.env.PORT;
// app.use(express.static(path.join(__dirname, "/client/build")));

if (process.env.NODE_ENV === 'production') {
  app.use('/static', express["static"](path.join(__dirname, 'client/build')));
}

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});
app.listen(process.env.PORT || 3000, function () {
  console.log("Express server listening on port %d in %s mode", _this.address().port, app.settings.env);
});