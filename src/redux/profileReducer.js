let ADD_POST = 'ADD-POST';
let UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

export let addPostActionCreator = () => ({type: ADD_POST});
export let updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, updatedText: text})

let initialState = {
    postData: [
        {id: 1, text: 'first post', likesCount: "24"},
        {id: 2, text: 'second post', likesCount: "11"},
        {id: 3, text: 'third post', likesCount: "34"},  
    ],
    updatedText: 'something',
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
    } 
    return state;

}

export default profileReducer;