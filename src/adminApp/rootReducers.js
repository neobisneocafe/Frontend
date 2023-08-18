import { categorySlice } from "@/entities/admin/categories";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    [categorySlice.name]: categorySlice.reducer
})