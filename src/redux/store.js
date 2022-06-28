import rerender from "../render";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";


let state = {
    messagePage: {
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
    },

    profilePage: {
        postData: [
            {id: 1, text: 'first post', likesCount: "24"},
            {id: 2, text: 'second post', likesCount: "11"},
            {id: 3, text: 'third post', likesCount: "34"},  
        ],

        updatedText: 'something',
    },

    mainMenu: {
        friendsData: [
            {id: 1, name: 'Kolya', avatar: "aaa"},
            {id: 2, name: 'Petya', avatar: "vvv"},
            {id: 3, name: 'Sasha', avatar: "eee"},
        ],
    },


    dispatch: function (action){
        this.profilePage = profileReducer (this.profilePage, action);
        this.messagePage = messageReducer (this.messagePage, action);
        rerender(state);   
    }
}

export default state;