import React from "react";
import AllUsers from "./AllUsers";
import { connect } from "react-redux/es/exports";
import { followActionCreator, setUsersAC, unfollowActionCreator } from "../../../redux/AllUsersReducer";

let mapStateToProps = (state) => {
    return {
        allusers: state.allUsersPage.allusers
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            debugger
            let action = setUsersAC(users);
            dispatch(action);
            debugger
        }
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);