import { NavLink } from 'react-router-dom';
import s from './MainMenu.module.css'

function MainMenu() {
    return (
      <div className="MainMenu">
        
            <div className={s.menuItem}><NavLink to='/profile' className={navData => navData.isActive ? s.active : ''}>Profile</NavLink></div>
            <div className={s.menuItem}><NavLink to='/dialogs' className={navData => navData.isActive ? s.active : ''}>Message</NavLink></div>
            <div className={s.menuItem}><NavLink to='/news'  className={navData => navData.isActive ? s.active : ''}>News</NavLink></div>
            <div className={s.menuItem}><NavLink to='/Music' className={navData => navData.isActive ? s.active : ''}>Music</NavLink></div>
            <div className={s.menuItem}><NavLink to='/settings' className={navData => navData.isActive ? s.active : ''}>Settings</NavLink></div>

      </div>
    );
  }

  export default MainMenu;