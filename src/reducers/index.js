import UsersReducer from './users';
import { combineReducers } from "redux";
// HERE IMPORT REDUCERS TO BE COMBINED
// example: 
//import authReducer from "./authReducer";
   
export default combineReducers({
// example 
//  auth: authReducer, 
    users: UsersReducer
});
