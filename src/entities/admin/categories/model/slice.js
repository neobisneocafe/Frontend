const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: [],
  isLoading: true
};

export const categorySlice = createSlice({
  name: "category",
  initialState
});

// export default categorySlice.reducer 