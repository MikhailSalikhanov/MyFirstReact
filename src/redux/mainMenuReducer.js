let initialState = {
    friendsData: [
        {id: 1, name: 'Kolya', avatar: "aaa"},
        {id: 2, name: 'Petya', avatar: "vvv"},
        {id: 3, name: 'Sasha', avatar: "eee"},
    ],
}

let mainMenuReducer = function (state = initialState, action){  
    return state; 
}

export default mainMenuReducer;