import './App.css';
import './myComponents/Reset.css'
import MainMenu from './myComponents/MainMenu/MainMenu';
import DialogsContainer from './myComponents/Container/Dialogs/DialogsContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllUsersContainer from './myComponents/Container/AllUsers/AllUsersContainer';
import ProfileContainer from './myComponents/Container/Profile/ProfileContainer';
import HeaderContainer from './myComponents/Header/HeaderContainer';


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <div className='wrapper'>
          <MainMenu mainMenu={props.store.getState().mainMenu}/>
          <div className='Container'>
            <Routes>
              <Route path='/dialogs' element={<DialogsContainer />}/>
              <Route path='/profile/:userId' element={<ProfileContainer />}/>
              <Route path='/profile/' element={<ProfileContainer />}/>
              <Route path='/users' element={<AllUsersContainer/>}/>

            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
    );
}






export default App;
