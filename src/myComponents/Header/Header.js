import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

function Header(props) {
    return (
      <div className="Header">
            <div className={s.picture}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/640px-Facebook_Logo_%282019%29.png" alt="" /></div>
            <div className={s.text}>Header</div>
            <div className={s.loginBlock}> 
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
      </div>
    );
  }

export default Header;