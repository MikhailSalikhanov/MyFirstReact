import './App.css';
import './myComponents/Reset.css'
import MainMenu from './myComponents/MainMenu/MainMenu';
import Header from './myComponents/Header/Header';
import DialogsContainer from './myComponents/Container/Dialogs/DialogsContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './myComponents/Container/Profile/Profile';
import AllUsersContainer from './myComponents/Container/AllUsers/AllUsersContainer';


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='wrapper'>
          <MainMenu mainMenu={props.store.getState().mainMenu}/>
          <div className='Container'>
            <Routes>
              <Route path='/dialogs' element={<DialogsContainer />}/>
              <Route path='/profile' element={<Profile />}/>
              <Route path='/users' element={<AllUsersContainer/>}/>

            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
    );
}






export default App;
