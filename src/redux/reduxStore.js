import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import messageReducer from './messageReducer';
import profileReducer from './profileReducer';
import mainMenuReducer from './mainMenuReducer'
import AllUsersReducer from "./AllUsersReducer";
import authReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk";

let redusers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    mainMenu: mainMenuReducer, 
    allUsersPage: AllUsersReducer,
    auth: authReducer,
}); 

let store = legacy_createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;