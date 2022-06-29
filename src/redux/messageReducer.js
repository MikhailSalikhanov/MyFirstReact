let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_MESSAGE = 'UPDATE-MESSAGE';


export let addMessageCreator = () => ({type: ADD_MESSAGE});
export let updateMessageCreator = (text) => ({type: UPDATE_MESSAGE, updatedMessage: text});

let initialState = {
    UsersData: [
        {id: 1, name: 'User 1'},
        {id: 2, name: 'User 2'},
        {id: 3, name: 'User 3'},
    ],

    messagesData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I am ok!'},
        ],
    
    updatedMessage: ' ',
};

let messageReducer = function (state = initialState, action){
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