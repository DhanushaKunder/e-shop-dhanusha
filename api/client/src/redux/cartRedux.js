import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
      console.log("price", action.payload.price)
      console.log("quantity", action.payload.quantity)
      console.log("payload", action.payload)
    },

    deleteProduct: (state, action) => {
      state.quantity -= 1;
      state.products.splice(
            state.products.findIndex((item) => item._id === action.payload.id),1
          );
          console.log("action.payload._id", action.payload.id);
      state.total -= action.payload.price * action.payload.quant;
      // state.total = 0;
      console.log("Reduxprice", action.payload.price)
      console.log("Reduxquantity", action.payload.quant)
      console.log("payload", action.payload)
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;