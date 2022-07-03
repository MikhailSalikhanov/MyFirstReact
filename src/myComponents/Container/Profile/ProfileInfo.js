import s from './Profile.module.css'
import AddPostContainer from './AddPost/AddPostContainer';
import Preloader from '../../Common/Preloader/Preloader';

function ProfileInfo (props) {
    if (!props.profile){
      return <Preloader/>
    }
    return (
      <div>
          <img src={props.profile.photos.large} />
      </div>
    );
  }

  export default ProfileInfo;