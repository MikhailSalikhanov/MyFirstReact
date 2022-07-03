import React from "react";
import { connect } from "react-redux/es/exports";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../../../redux/AllUsersReducer";
import axios from "axios";
import AllUsersFunc from "./AllUsersFunc";
import Preloader from "../../Common/Preloader/Preloader";

class AllUsersContainer extends React.Component {
   
    componentDidMount (){
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (currentPage) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
       });
    };

    render(){

        return <>
        {this.props.isFetching ? <Preloader /> : null}
        <AllUsersFunc totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        allusers={this.props.allusers}
        unfollow={this.props.unfollow}
        follow={this.props.follow}

        />
    </>
    }
}

let mapStateToProps = (state) => {
    return {
        allusers: state.allUsersPage.allusers,
        pageSize: state.allUsersPage.pageSize,
        totalUsersCount: state.allUsersPage.totalUsersCount,
        currentPage: state.allUsersPage.currentPage,
        isFetching: state.allUsersPage.isFetching,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followActionCreator(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowActionCreator(userId));
//         },
//         setUsers: (users) => {
//             let action = setUsersAC(users);
//             dispatch(action);
//         },
//         setCurrentPage: (pageNumber) => {
//             let action = setCurrentPageAC(pageNumber);
//             dispatch(action);
//         },
//         setTotalUsersCount: (totalCount) => {
//             let action = setUsersTotalCountAC(totalCount);
//             dispatch(action);
//         },
//         toggleIsFetching: (isFetching) => {
//             let action = toggleIsFetchingAC(isFetching);
//             dispatch(action);
//         },
//     }
// } 

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(AllUsersContainer);