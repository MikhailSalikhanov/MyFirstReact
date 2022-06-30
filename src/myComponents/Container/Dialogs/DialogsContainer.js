import {updateMessageCreator, addMessageCreator} from '../../../redux/messageReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'

// function DialogsContainer (props) {

//   let changeMessage = function(body){

//     props.store.dispatch(updateMessageCreator(body))
//   };

//   let sendMessage = function(body){
//     props.store.dispatch(addMessageCreator(body))
//   };

//     return <Dialogs messagePage={props.store.getState().messagePage} 
//                     dispatch={props.store.dispatch.bind(props.store)} 
//                     updateMessageCreator = {changeMessage}
//                     sendMessage={sendMessage} />
//   }


  let mapStateToProps = (state) =>{
    return {
      messagePage: state.messagePage,
    }
  };

  let mapDispatchToProps = (dispatch) =>{
    return {
      updateMessageCreator: (body) => {
          dispatch(updateMessageCreator(body))
      },

      sendMessage: (body) => {
          dispatch(addMessageCreator(body))
      },
    }
  };

  const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);

  export default DialogsContainer;