/**
 * App Component
 * Configures the router, routes, layout rules, and scroll restoration.
 */
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

import Home from './pages/Home';
import ExploreTools from './pages/ExploreTools';
import ToolDetails from './pages/ToolDetails';
import Compare from './pages/Compare';
import SubmitTool from './pages/SubmitTool';
import Dashboard from './pages/Dashboard';

import { AuthProvider, useAuth } from './context/AuthContext';
import { Navigate } from 'react-router-dom';
import Auth from './pages/Auth';

// Scroll to top or specific hash on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null;
};

// Protected Route wrapper component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-900">
        <div className="w-8 h-8 rounded-full border-2 border-t-primary border-slate-300 animate-spin"></div>
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Layout component that hides Navbar & Footer on dashboard routes
const AppLayout = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className="flex flex-col min-h-screen">
      {!isDashboard && <Navbar />}
      <div className="flex-grow">{children}</div>
      {!isDashboard && <Footer />}
      {/* Show Chatbot everywhere except dashboard */}
      {!isDashboard && <Chatbot />}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <AppLayout>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<ExploreTools />} />
              <Route path="/tools/:slug" element={<ToolDetails />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/login" element={<Auth defaultIsLogin={true} />} />
              <Route path="/register" element={<Auth defaultIsLogin={false} />} />
              
              {/* Dashboard and its subroutes protected by ProtectedRoute */}
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/submit" 
                element={
                  <ProtectedRoute>
                    <SubmitTool />
                  </ProtectedRoute>
                } 
              />
              <Route path="/dashboard/favorites" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/dashboard/reviews" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/dashboard/settings" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            </Routes>
          </AnimatePresence>
        </AppLayout>
      </Router>
    </AuthProvider>
  );
}

export default App;
