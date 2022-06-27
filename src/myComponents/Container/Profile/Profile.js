import s from './Profile.module.css'
import Post from './Post/Post';
import AddPost from './AddPost/AddPost';

function Profile(props) {
  let post = props.state.postData.map(p => <Post text={p.text} likesCount={p.likesCount} />);

    return (
      <div>
          <img className={s.picture} src="https://papik.pro/uploads/posts/2021-09/1631468508_5-papik-pro-p-peizazh-panorama-5.jpg" alt="" />
          <AddPost addPost={props.addPost}/>
          {post}
      </div>
    );
  }

  export default Profile;