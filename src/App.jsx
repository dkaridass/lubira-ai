import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Layout from './components/Layout';
import SmoothScroll from './components/SmoothScroll';
import Choreography from './components/Choreography';
import Home from './pages/Home';
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    // reducedMotion="user": Framer Motion drops transform/layout animation
    // when the OS asks for reduced motion.
    <MotionConfig reducedMotion="user">
      <SmoothScroll />
      <BrowserRouter>
        <Choreography />
        <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="realisations" element={<Projects />} />
            <Route path="a-propos" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        </Suspense>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
