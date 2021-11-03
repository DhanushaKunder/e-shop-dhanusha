"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.deleteProduct = exports.addProduct = void 0;

var _toolkit = require("@reduxjs/toolkit");

var cartSlice = (0, _toolkit.createSlice)({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0
  },
  reducers: {
    addProduct: function addProduct(state, action) {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
      console.log("price", action.payload.price);
      console.log("quantity", action.payload.quantity);
      console.log("payload", action.payload);
    },
    deleteProduct: function deleteProduct(state, action) {
      state.quantity -= 1;
      state.products.splice(state.products.findIndex(function (item) {
        return item._id === action.payload.id;
      }), 1);
      console.log("action.payload._id", action.payload.id);
      state.total -= action.payload.price * action.payload.quant; // state.total = 0;

      console.log("Reduxprice", action.payload.price);
      console.log("Reduxquantity", action.payload.quant);
      console.log("payload", action.payload);
    }
  }
});
var _cartSlice$actions = cartSlice.actions,
    addProduct = _cartSlice$actions.addProduct,
    deleteProduct = _cartSlice$actions.deleteProduct;
exports.deleteProduct = deleteProduct;
exports.addProduct = addProduct;
var _default = cartSlice.reducer;
exports["default"] = _default;