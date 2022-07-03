let ADD_POST = 'ADD-POST';
let UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
let SET_USER_PROFILE = 'SET_USER_PROFILE';

export let addPostActionCreator = () => ({type: ADD_POST});
export let updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, updatedText: text})
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

let initialState = {
    postData: [
        {id: 1, text: 'first post', likesCount: "24"},
        {id: 2, text: 'second post', likesCount: "11"},
        {id: 3, text: 'third post', likesCount: "34"},  
    ],
    updatedText: 'something',
    profile: null,
};



let profileReducer = function (state = initialState, action){
    if (action.type === ADD_POST){
        let newPost = {
            id: 4,
            text: state.updatedText,
            likesCount: "0",
        }
        let stateCopy = {...state};
        stateCopy.postData = [...state.postData]
        stateCopy.postData.push(newPost);
        stateCopy.updatedText = ''; 
        return stateCopy;
    } else if (action.type === UPDATE_POST_TEXT){
        let stateCopy = {...state};
        stateCopy.updatedText = action.updatedText; 
        return stateCopy;
    } else if (action.type === SET_USER_PROFILE){
        return {...state, profile: action.profile};
    } 
    return state;

}

export default profileReducer;