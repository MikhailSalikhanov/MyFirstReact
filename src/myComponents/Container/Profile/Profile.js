import s from './Profile.module.css'
import AddPostContainer from './AddPost/AddPostContainer';

function Profile(props) {

    return (
      <div>
          <img className={s.picture} src="https://papik.pro/uploads/posts/2021-09/1631468508_5-papik-pro-p-peizazh-panorama-5.jpg" alt="" />
          <AddPostContainer store={props.store} />
      </div>
    );
  }

  export default Profile;