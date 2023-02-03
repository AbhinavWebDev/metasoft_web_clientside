import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import enquiryReducer from "./EnquiryReducer";


export const reducers =combineReducers({authReducer,enquiryReducer})