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
          <MainMenu state={props.state.mainMenu}/>
          <div className='Container'>
            <Routes>
              <Route path='/dialogs' element={<Dialogs messagePage={props.state.messagePage} dispatch={props.state.dispatch.bind(props.state)}/>}/>
              <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.state.dispatch.bind(props.state)} />}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
    );
}






export default App;
