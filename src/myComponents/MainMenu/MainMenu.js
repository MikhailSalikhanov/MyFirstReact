import { NavLink } from 'react-router-dom';
import s from './MainMenu.module.css'


function Friend (props) {
  return(
    <div className={s.friendAvatars}>{props.name}</div>
  )
}

function MainMenu(props) {
  let friend = props.mainMenu.friendsData.map(f =>  <Friend name={f.name} key={f.id}/>);
    return (
      <div className="MainMenu">
        
            <div className={s.menuItem}><NavLink to='/profile' className={navData => navData.isActive ? s.active : ''}>Profile</NavLink></div>
            <div className={s.menuItem}><NavLink to='/dialogs' className={navData => navData.isActive ? s.active : ''}>Message</NavLink></div>
            <div className={s.menuItem}><NavLink to='/news'  className={navData => navData.isActive ? s.active : ''}>News</NavLink></div>
            <div className={s.menuItem}><NavLink to='/Music' className={navData => navData.isActive ? s.active : ''}>Music</NavLink></div>
            <div className={s.menuItem}><NavLink to='/settings' className={navData => navData.isActive ? s.active : ''}>Settings</NavLink></div>
            <div className={s.menuItem}><NavLink to='/users' className={navData => navData.isActive ? s.active : ''}>All users</NavLink></div>

            <div className={s.friends}>Friends:</div>
            <div>{friend}</div>
      
      </div>
    );
  }

  export default MainMenu;