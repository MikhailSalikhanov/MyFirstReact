import s from './Post.module.css'

function Post(props) {
    return (
      <div className={s.Post}>
          <img className={s.picture} src="https://i.pinimg.com/originals/c0/05/46/c00546c4977909885275ba6a3e71d94e.png" alt="" />
          <div className={s.text}>{props.text} likes: {props.likesCount}</div>
      </div>
    );
  }

  export default Post;