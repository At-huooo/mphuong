import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './AnimateRoute';
import './index.css';
import ScrollToTop from './assets/ScrollToTop';

let routerDom = (
  <BrowserRouter>
    <ScrollToTop />
    <AnimatedRoutes />
  </BrowserRouter>
);

if (import.meta.env.BASE_URL) {
  routerDom = (
    <BrowserRouter basename={`${import.meta.env.BASE_URL}`}>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {routerDom}
  </React.StrictMode>
);