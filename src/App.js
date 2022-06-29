import './App.css';
import './myComponents/Reset.css'
import MainMenu from './myComponents/MainMenu/MainMenu';
import Header from './myComponents/Header/Header';
import Dialogs from './myComponents/Container/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './myComponents/Container/Profile/Profile';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='wrapper'>
          <MainMenu mainMenu={props.store.getState().mainMenu}/>
          <div className='Container'>
            <Routes>
              <Route path='/dialogs' element={<Dialogs messagePage={props.store.getState().messagePage} dispatch={props.store.dispatch.bind(props.store)}/>}/>
              <Route path='/profile' element={<Profile profilePage={props.store.getState().profilePage} dispatch={props.store.dispatch.bind(props.store)} />}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
    );
}






export default App;
