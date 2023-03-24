import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css';

import App from './App';
import HelloWorld from './components/HelloWorld';
import Forms from './components/Tugas/Tugas 1/Forms';
import Latihan2 from './components/Latihan/Pertemuan 2/Latihan2';
import Layouts from './components/Tugas/Tugas 2/Layout';
import Widget1 from './components/Tugas/Tugas 2/Widget1';
import FormsMultiple from './components/Tugas/Tugas 2/FormsMultiple';
import Layout from './components/Latihan/Pertemuan 3/layouts/Layout';
import Home from './components/Latihan/Pertemuan 3/modules/components/homes/Home';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './components/Latihan/Pertemuan 3/apps/AppRoute';

const { PUBLIC_URL } = process.env;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HelloWorld /> */}
    {/* <Forms /> */}
    {/* <Latihan2/> */}
    {/* <Layouts /> */}
    {/* <Widget1 /> */}
    {/* <FormsMultiple /> */}

    {/* <Layout /> */}

    {/* <Layout>
      <Home />
    </Layout> */}

    <BrowserRouter basename={PUBLIC_URL}>
      <AppRoute />
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
