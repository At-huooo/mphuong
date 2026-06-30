import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import LandingPage from './App'; 
import HomePage from './pages/Home';       
import AboutMe from './pages/AboutMe';    
import Achievement from './pages/Achievement'; 
import Thankyou from './pages/Thankyou';
import Future1 from './pages/Future1';
import DraftroomDetails from './pages/Future2';
import Extracurricular from './pages/Extracurricular';

// Wrapper
import PageWrapper from './assets/PaperWrapper';

// Route Configuration
const routeConfig = [
  { path: '/', element: <LandingPage /> },
  { path: '/home', element: <HomePage /> },
  { path: '/about', element: <AboutMe /> },
  { path: '/achievement', element: <Achievement /> },
  { path: '/thankyou', element: <Thankyou /> },
  { path: '/future', element: <Future1 /> },
  { path: '/draftroom-details', element: <DraftroomDetails /> },
  { path: '/extracurricular', element: <Extracurricular /> },
];

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routeConfig.map(({ path, element }) => (
          <Route 
            key={path} 
            path={path} 
            element={<PageWrapper>{element}</PageWrapper>} 
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;