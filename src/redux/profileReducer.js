let ADD_POST = 'ADD-POST';
let UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

export let addPostActionCreator = () => ({type: ADD_POST});
export let updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, updatedText: text})


let profileReducer = function (state, action){
    debugger;
    if (action.type === ADD_POST){
        let newPost = {
            id: 4,
            text: state.updatedText,
            likesCount: "0",
        }
        state.postData.push(newPost);
        state.updatedText = ''; 
    } else if (action.type === UPDATE_POST_TEXT){
        state.updatedText = action.updatedText; 
    } 
    return state;
}

export default profileReducer;