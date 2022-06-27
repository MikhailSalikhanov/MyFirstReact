import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'


function MessageItem (props) {
  return(
    <div className={s.messages}>{props.text}</div>
  )
}

export default MessageItem;