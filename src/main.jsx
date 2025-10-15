import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/variables.css'
import './styles/main.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
