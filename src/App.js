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
              <Route path='/dialogs' element={<Dialogs state={props.state.messagePage} />}/>
              <Route path='/profile' element={<Profile profilePage={props.state.profilePage} addPost={props.state.addPost} updatePostText={props.state.updatePostText} />}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
    );
}






export default App;
