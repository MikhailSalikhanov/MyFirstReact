import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'


function MessageItem (props) {
  return(
    <div>{props.text}</div>
  )
}

export default MessageItem;