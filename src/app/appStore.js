const { configureStore, createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: { phoneNumber: "", firstname: "", lastname: "" },
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

    logout: (state) => {
      state = initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;

export function makeStore() {
  const store = configureStore({
    reducer: {
      user: userSlice.reducer,
    },
  });

  return store;
}
export const appStore = makeStore();
