import React from 'react';
import {updatePostTextActionCreator, addPostActionCreator} from '../../../../redux/profileReducer'
import AddPost from './AddPost';


function AddPostContainer(props) {

  let addPost = function(){
    let action = addPostActionCreator();
    props.store.dispatch(action);
  }

  let updatePostText = function(text){
    let action = updatePostTextActionCreator(text);
    props.store.dispatch(action);
  }
 
    return <AddPost updatePostText={updatePostText} 
                    addPost={addPost} 
                    postData={props.store.getState().profilePage.postData} 
                    updatedText={props.store.getState().profilePage.updatedText}/>
  }

  export default AddPostContainer;