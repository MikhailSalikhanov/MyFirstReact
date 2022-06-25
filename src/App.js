import './App.css';
import './myComponents/Reset.css'
import MainMenu from './myComponents/MainMenu/MainMenu';
import Header from './myComponents/Header/Header';
import Container from './myComponents/Container/Container';
import Dialogs from './myComponents/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
  

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='wrapper'>
          <MainMenu />
          <div className='Container'>
            <Routes>
              <Route path='/dialogs' element={<Dialogs/>}/>
              <Route path='/profile' element={<Container/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
    );
}






export default App;
