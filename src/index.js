import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
// Import store frome redux
import { Provider } from "react-redux";
import store from "./redux/store/store";

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <App />
   
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
