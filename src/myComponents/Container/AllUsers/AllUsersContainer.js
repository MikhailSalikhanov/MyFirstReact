import React from "react";
import { connect } from "react-redux/es/exports";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress, getUsersThunkCreator } from "../../../redux/AllUsersReducer";
import AllUsersFunc from "./AllUsersFunc";
import Preloader from "../../Common/Preloader/Preloader";
import { usersAPI } from "../../../API/api";

class AllUsersContainer extends React.Component {
   
    componentDidMount (){
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // });
    }

    onPageChanged = (currentPage) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(currentPage);
        usersAPI.getUsers(currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
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
                        toggleFollowingProgress={this.props.toggleFollowingProgress}
                        followingInProgress={this.props.followingInProgress}


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
        followingInProgress: state.allUsersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress, getUsersThunkCreator })(AllUsersContainer);