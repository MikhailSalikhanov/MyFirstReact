import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

function User (props) { 
  return (
  <div className={s.userItem + ' ' + s.active}>
    <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
  </div>
  );
}

export default User;