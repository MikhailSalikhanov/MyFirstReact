// import User from './User'
// import MessageItem from './Message'
import {updateMessageCreator, addMessageCreator} from '../../../redux/messageReducer'
import Dialogs from './Dialogs'

function DialogsContainer (props) {

  let changeMessage = function(body){
    props.store.dispatch(updateMessageCreator(body))
  };

  let sendMessage = function(body){
    props.store.dispatch(addMessageCreator(body))
  };

    return <Dialogs messagePage={props.store.getState().messagePage} 
                    dispatch={props.store.dispatch.bind(props.store)} 
                    updateMessageCreator = {changeMessage}
                    sendMessage={sendMessage} />
  }

  export default DialogsContainer;