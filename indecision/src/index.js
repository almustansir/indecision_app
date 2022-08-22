import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './app/store';
import { useSelector } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const options = useSelector((state) => state.options.value)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App options={options}/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
