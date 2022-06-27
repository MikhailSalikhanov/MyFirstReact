import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerender = function (state){
    root.render(
      <React.StrictMode>
          <App state={state}/>
      </React.StrictMode>
    );
}

export default rerender;