import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import HelloWorld from './components/HelloWorld';
import Forms from './components/Tugas/Tugas 1/Forms';
import Latihan2 from './components/Latihan/Latihan2';
import Layout from './components/Tugas/Tugas 2/Layout';
import Widget1 from './components/Tugas/Tugas 2/Widget1';
import FormsMultiple from './components/Tugas/Tugas 2/FormsMultiple';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HelloWorld /> */}
    {/* <Forms /> */}
    {/* <Latihan2/> */}
    {/* <Layout /> */}
    {/* <Widget1 /> */}
    <FormsMultiple />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
