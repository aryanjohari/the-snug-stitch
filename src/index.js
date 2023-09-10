import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import LoadingScreen from './components/LoadingScreen';
import SubscribePopup from './components/PopupFrom';

// ..
AOS.init();

// register Swiper custom elements


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoadingScreen />
    <SubscribePopup />
    <App />
  </React.StrictMode>
);

