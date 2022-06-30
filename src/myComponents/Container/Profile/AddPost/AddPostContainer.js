import React from 'react';
import {updatePostTextActionCreator, addPostActionCreator} from '../../../../redux/profileReducer'
import AddPost from './AddPost';
import {connect} from 'react-redux'


// function AddPostContainer(props) {

//   let addPost = function(){
//     let action = addPostActionCreator();
//     props.store.dispatch(action);
//   }

//   let updatePostText = function(text){
//     let action = updatePostTextActionCreator(text);
//     props.store.dispatch(action);
//   }
 
//     return <AddPost updatePostText={updatePostText} 
//                     addPost={addPost} 
//                     postData={props.store.getState().profilePage.postData} 
//                     updatedText={props.store.getState().profilePage.updatedText}/>
//   }

//   export default AddPostContainer;

  let mapStateToProps = (state) =>{
    return {
      postData: state.profilePage.postData,
      updatedText: state.profilePage.updatedText,
  };
}

  let mapDispatchToProps = (dispatch) =>{
    return {
      addPost: () => {
        let action = addPostActionCreator();
        dispatch(action);
      },

      updatePostText: (text) => {
        let action = updatePostTextActionCreator(text);
        dispatch(action);      
      },
    }
  };

  const AddPostContainer = connect (mapStateToProps, mapDispatchToProps)(AddPost);

  export default AddPostContainer;