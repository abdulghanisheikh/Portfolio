import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <App/>
);