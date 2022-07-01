let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';


export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = function (allusers) {
    debugger
    return {type: SET_USERS, allusers};
};

let initialState = {
    allusers: [],
};



let AllUsersReducer = function (state = initialState, action){
    debugger
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
            debugger
            return {...state, allusers: action.allusers};
        default:
            return state;
    }
    

}

export default AllUsersReducer;