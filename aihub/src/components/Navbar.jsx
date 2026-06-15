/**
 * Navbar Component
 * Sticky navigation with blur-on-scroll effect, responsive mobile menu.
 */
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { useAuth } from '../context/AuthContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Explore Tools', path: '/explore' },
  { name: 'Categories', path: '/#categories' },
  { name: 'Compare', path: '/compare' },
  { name: 'Pricing', path: '/#pricing' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-theme-bg/80 backdrop-blur-xl border-b border-theme-glassBorder shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center text-slate-900 font-bold text-lg group-hover:shadow-lg group-hover:shadow-primary/40 transition-shadow duration-300">
              AI
            </div>
            <span className="text-xl font-bold text-theme-text">
              AI<span className="gradient-text">Hub</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-theme-text bg-theme-glassHover'
                    : 'text-theme-muted hover:text-theme-text hover:bg-theme-glass'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <Link
                  to="/submit"
                  className="btn-primary text-sm !px-4 !py-2 mr-2"
                >
                  Submit Tool
                </Link>
                <Link
                  to="/dashboard"
                  className="px-4 py-2 text-sm font-medium text-theme-text/80 hover:text-theme-text transition-colors duration-300"
                >
                  Dashboard ({user?.name})
                </Link>
                <button
                  onClick={logout}
                  className="btn-secondary text-sm !px-4 !py-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-theme-text/80 hover:text-theme-text transition-colors duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn-primary text-sm !px-5 !py-2.5"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-theme-text p-2 hover:bg-theme-glass rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-theme-bg/95 backdrop-blur-xl border-b border-theme-glassBorder overflow-hidden"
          >
            <div className="section-container py-4 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      location.pathname === link.path
                        ? 'text-theme-text bg-theme-glassHover'
                        : 'text-theme-muted hover:text-theme-text hover:bg-theme-glass'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-2 pt-3 border-t border-theme-glassBorder mt-2">
                {isAuthenticated ? (
                  <>
                    <Link to="/submit" className="btn-primary text-sm text-center">
                      Submit Tool
                    </Link>
                    <Link to="/dashboard" className="btn-secondary text-sm text-center">
                      Dashboard ({user?.name})
                    </Link>
                    <button onClick={logout} className="btn-primary text-sm text-center">
                      Logout
                    </button>
                  </>
                ) : (
                  <div className="flex gap-3">
                    <Link to="/login" className="btn-secondary text-sm flex-1 text-center">
                      Login
                    </Link>
                    <Link to="/register" className="btn-primary text-sm flex-1 text-center">
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
