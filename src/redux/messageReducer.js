let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_MESSAGE = 'UPDATE-MESSAGE';


export let addMessageCreator = () => ({type: ADD_MESSAGE});
export let updateMessageCreator = (text) => ({type: UPDATE_MESSAGE, updatedMessage: text});


let messageReducer = function (state, action){
    if (action.type === ADD_MESSAGE){
        let newMessage = {
            id: 4, 
            message: state.updatedMessage,
        }
        state.messagesData.push(newMessage);
        state.updatedMessage=' ';
    }
    else if (action.type === UPDATE_MESSAGE){
        state.updatedMessage = action.updatedMessage; 
    }       
    return state; 
}

export default messageReducer;