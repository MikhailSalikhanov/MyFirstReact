import './App.css';
import './myComponents/Reset.css'
import MainMenu from './myComponents/MainMenu/MainMenu';
import Header from './myComponents/Header/Header';
import Container from './myComponents/Container/Container';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='wrapper'>
        <MainMenu />
        <Container />
      </div>

    </div>
  );
}






export default App;
