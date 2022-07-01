import { legacy_createStore, combineReducers } from "redux";
import messageReducer from './messageReducer';
import profileReducer from './profileReducer';
import mainMenuReducer from './mainMenuReducer'
import AllUsersReducer from "./AllUsersReducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    mainMenu: mainMenuReducer, 
    allUsersPage: AllUsersReducer,
});

let store = legacy_createStore(redusers);

export default store;