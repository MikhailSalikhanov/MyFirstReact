import rerender from "../render";

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
    },

    profilePage: {
        postData: [
            {id: 1, text: 'first post', likesCount: "24"},
            {id: 2, text: 'second post', likesCount: "11"},
            {id: 3, text: 'third post', likesCount: "34"},  
        ],

        updatedText: ' ',
    },

    mainMenu: {
        friendsData: [
            {id: 1, name: 'Kolya', avatar: "aaa"},
            {id: 2, name: 'Petya', avatar: "vvv"},
            {id: 3, name: 'Sasha', avatar: "eee"},
        ],
    },

    addPost: function (){
        let newPost = {
            id: 4,
            text: state.profilePage.updatedText,
            likesCount: "0",
        }
      
        state.profilePage.postData.push(newPost);
        state.profilePage.updatedText = '';
    
        rerender(state);    
    },

    updatePostText: function (updatedText){
        state.profilePage.updatedText = updatedText; 
        rerender(state);    
    }

}

export default state;