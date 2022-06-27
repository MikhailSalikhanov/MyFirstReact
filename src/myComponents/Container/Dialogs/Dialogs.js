import s from './Dialogs.module.css'
import User from './User'
import MessageItem from './Message'

function Dialogs(props) {
  let user = props.state.UsersData.map(u => <User name={u.name} id={u.id}/>)
  let message = props.state.messagesData.map(m => <MessageItem text={m.message}/>)

    return (
      <div>
        <img className={s.picture} src="https://kartinkin.net/uploads/posts/2022-03/thumbs/1648124011_2-kartinkin-net-p-shirokie-kartinki-4.jpg" alt="" />
        <div className={s.Dialogs}>
          <div className={s.users}>
            {user}
          </div>
  
          <div className={s.messages}>
            {message}
          </div>
        </div>
      </div>
    );
  }

  export default Dialogs;