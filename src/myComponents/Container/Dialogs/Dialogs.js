import s from './Dialogs.module.css'
import User from './User'
import MessageItem from './Message'
import {updateMessageCreator, addMessageCreator} from './../../../redux/messageReducer'

function Dialogs(props) {
  let user = props.messagePage.UsersData.map(u => <User name={u.name} id={u.id}/>)
  let message = props.messagePage.messagesData.map(m => <MessageItem text={m.message}/>)

  let changeMessage = function(e){
    props.updateMessageCreator(e.target.value);
    // props.store.dispatch(updateMessageCreator(e.target.value))
  };
  let sendMessage = function(e){
    props.sendMessage();
    // props.store.dispatch(addMessageCreator())
  };

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
              <div className={s.forms}>
                  <div>
                      <textarea onChange={changeMessage} value={props.messagePage.updatedMessage}></textarea>
                  </div>
                  <div>
                      <button className='button' onClick={sendMessage}>Send</button>
                  </div>
              </div>
          </div>
      </div>
    );
  }

  export default Dialogs;