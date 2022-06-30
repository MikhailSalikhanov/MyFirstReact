import React from 'react';
import s from './AddPost.module.css'
import Post from './../Post/Post';

// import {updatePostTextActionCreator, addPostActionCreator} from './../../../../redux/profileReducer'


function AddPost(props) {
  let newPost = React.createRef();
  let post = props.postData.map(p => <Post text={p.text} likesCount={p.likesCount} />);

  let addPost = function(){
    // let text = newPost.current.value;
    // props.dispatch(addPostActionCreator());
    props.addPost();
  }

  let updatePostText = function(){
    let text = newPost.current.value;
    // props.dispatch(updatePostTextActionCreator(text));
    props.updatePostText(text);
  }
 
    return (
        <div>
                <div>
                  <textarea rows="5" cols="25" ref={newPost} value={props.updatedText} onChange={updatePostText}></textarea>
                </div>
                <div>
                  <button className='button' onClick={addPost}>Add post</button>
                </div>
                {post}

        </div>
    );
  }

  export default AddPost;