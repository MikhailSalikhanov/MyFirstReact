import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerender = function (store){
    root.render(
      <React.StrictMode>
          <App store={store}/>
      </React.StrictMode>
    );
}

rerender(store);

store.subscribe(() => {
    rerender(store); 
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
