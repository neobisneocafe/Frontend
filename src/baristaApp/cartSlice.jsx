const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart:[],
        totalPrice: 0,
    },
    reducers:{
        addToCart: (state, action) => {
            state.cart.push(action.payload);
            state.totalPrice += parseFloat(action.payload.price);
        },
        removeFromCart: (state, action) => {
            const removedItem = state.cart.find((x) => x.id === action.payload.id);
            if (removedItem) {
                state.cart = state.cart.filter((x) => x.id !== action.payload.id);
                state.totalPrice -= parseFloat(removedItem.price);
              }
        }
    }
})

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;