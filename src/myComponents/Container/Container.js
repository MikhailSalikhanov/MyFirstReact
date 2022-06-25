import s from './Container.module.css'
import Post from './Post/Post';

function Container() {
    return (
      <div className="Container">
          <img className={s.picture} src="https://papik.pro/uploads/posts/2021-09/1631468508_5-papik-pro-p-peizazh-panorama-5.jpg" alt="" />

          <Post text="first post"/>
          <Post text="second post"/>
          <Post />
          <Post />
          <Post />

      </div>
    );
  }

  export default Container;