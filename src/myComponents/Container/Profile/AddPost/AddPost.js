import React from 'react';
import s from './AddPost.module.css'
import {updatePostTextActionCreator, addPostActionCreator} from './../../../../redux/profileReducer'


function AddPost(props) {
  let newPost = React.createRef();

  let addPost = function(){
    let text = newPost.current.value;
    props.dispatch(addPostActionCreator());
  }

  let updatePostText = function(){
    debugger;
    let text = newPost.current.value;
    props.dispatch(updatePostTextActionCreator(text));
    debugger;
  }
 
    return (
        <div>
                <div>
                  <textarea rows="10" cols="45" ref={newPost} value={props.updatedText} onChange={updatePostText}></textarea>
                </div>
                <div>
                  <button className='button' onClick={addPost}>Add post</button>
                </div>
        </div>
    );
  }

  export default AddPost;