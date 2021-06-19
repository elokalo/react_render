import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  /**
   * The React.StrictMode is only use in development mode
   * to render twice the body, this cause that the logs of
   * the app are render before is invoked, but in production
   * this not happen
   */
  //<React.StrictMode>
    <App />,
  //</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
