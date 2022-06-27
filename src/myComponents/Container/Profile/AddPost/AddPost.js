import React from 'react';
import s from './AddPost.module.css'

function AddPost(props) {
  let newPost = React.createRef();

  let addPost = function(){
    let text = newPost.current.value;
    props.addPost();
  }

  let updatePostText = function(){
    let text = newPost.current.value;
    props.updatePostText(text);
  }
 
    return (
        <div>
                <div>
                  <textarea rows="10" cols="45" ref={newPost} value={props.updatedText} onChange={updatePostText}></textarea>
                </div>
                <div>
                  <button className={s.button} onClick={addPost}>Add post</button>
                </div>
        </div>
    );
  }

  export default AddPost;