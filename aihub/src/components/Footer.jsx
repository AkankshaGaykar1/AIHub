/**
 * Footer Component
 * 4-column footer with product, company, resources, and social media links.
 */
import { Link } from 'react-router-dom';
import { FaTwitter, FaGithub, FaDiscord, FaLinkedin, FaYoutube } from 'react-icons/fa';

const footerSections = [
  {
    title: 'Product',
    links: [
      { name: 'Explore Tools', path: '/explore' },
      { name: 'Compare', path: '/compare' },
      { name: 'Categories', path: '/#categories' },
      { name: 'Pricing', path: '/#pricing' },
      { name: 'API (Coming Soon)', path: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', path: '#' },
      { name: 'Careers', path: '#' },
      { name: 'Blog', path: '#' },
      { name: 'Press Kit', path: '#' },
      { name: 'Contact', path: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', path: '#' },
      { name: 'Help Center', path: '#' },
      { name: 'Community', path: '#' },
      { name: 'Newsletter', path: '#' },
      { name: 'Status', path: '#' },
    ],
  },
];

const socialLinks = [
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaGithub, href: '#', label: 'GitHub' },
  { icon: FaDiscord, href: '#', label: 'Discord' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-theme-glassBorder bg-theme-bg">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center text-slate-900 font-bold text-lg">
                AI
              </div>
              <span className="text-xl font-bold text-theme-text">
                AI<span className="gradient-text">Hub</span>
              </span>
            </Link>
            <p className="text-theme-muted text-sm leading-relaxed mb-6 max-w-sm">
              Discover, compare, and find the perfect AI tools for your workflow.
              The most comprehensive AI tool directory on the web.
            </p>

            {/* Newsletter */}
            <div className="mb-8 max-w-sm">
              <h5 className="text-theme-text font-semibold mb-3">Subscribe to our newsletter</h5>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-theme-glass border border-theme-glassBorder rounded-xl px-4 py-2 text-sm text-theme-text focus:outline-none focus:border-primary transition-colors"
                  required
                />
                <button type="submit" className="bg-primary hover:bg-primary-light text-slate-900 px-4 py-2 rounded-xl text-sm font-semibold transition-colors shadow-lg hover:shadow-primary/30">
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-theme-glass border border-theme-glassBorder flex items-center justify-center text-theme-muted hover:text-theme-text hover:bg-theme-glassHover hover:border-primary/50 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-theme-text font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-theme-muted text-sm hover:text-theme-text transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-theme-glassBorder flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-theme-muted/80 text-sm">
            © {new Date().getFullYear()} AIHub. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-theme-muted/80 text-sm hover:text-theme-text transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-theme-muted/80 text-sm hover:text-theme-text transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-theme-muted/80 text-sm hover:text-theme-text transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
