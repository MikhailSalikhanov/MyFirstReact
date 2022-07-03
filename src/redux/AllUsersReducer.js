let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (allusers) => ({type: SET_USERS, allusers});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});


let initialState = {
    allusers: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 5,
    isFetching: false,
};



let AllUsersReducer = function (state = initialState, action){
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, 
                allusers: state.allusers.map(u=>{
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state, 
                allusers: state.allusers.map(u=>{
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
            case SET_USERS:
                return {...state, allusers: action.allusers};
            case SET_CURRENT_PAGE:
                return {...state, currentPage: action.currentPage};
            case SET_USERS_TOTAL_COUNT:
                return {...state, totalUsersCount: action.totalCount};
            case TOGGLE_IS_FETCHING:
                return {...state, isFetching: action.isFetching};
            default:
            return state;
    }
    

}

export default AllUsersReducer;