import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeContext';
import { ThemeToggle } from './ThemeToggle';
import './AwesomeHeaders.css';
import './AwesomeHeaderVariants.css';

/**
 * Awesome Header Component with Multiple Variants
 * Features: Responsive, Accessible, Themeable, Multiple Styles
 */
export const AwesomeHeader = ({
  variant = 'modern',
  logo,
  brand = 'WeatherApp',
  navigation = [],
  user = null,
  showThemeToggle = true,
  onLogin,
  onLogout,
  onCreateAccount,
  className = '',
  fixed = false,
  transparent = false,
  ...props
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Default logo if none provided
  const defaultLogo = (
    <svg viewBox="0 0 32 32" className="awesome-header__logo">
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#logo-gradient)" />
      <path
        d="M8 12h16l-2 8H10l-2-8zM12 8h8v4H12V8z"
        fill="white"
        opacity="0.9"
      />
      <circle cx="16" cy="16" r="2" fill="white" />
    </svg>
  );

  // Default navigation items if none provided
  const defaultNavigation = [
    { label: 'Dashboard', href: '#dashboard', active: true },
    { label: 'Weather', href: '#weather' },
    { label: 'Forecast', href: '#forecast' },
    { label: 'Settings', href: '#settings' },
  ];

  const navItems = navigation.length > 0 ? navigation : defaultNavigation;

  // Build CSS classes
  const headerClasses = [
    'awesome-header',
    `awesome-header--${variant}`,
    fixed && 'awesome-header--fixed',
    transparent && 'awesome-header--transparent',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={headerClasses} {...props}>
      {/* Left Section - Logo & Brand */}
      <div className="awesome-header__left">
        <a href="#" className="awesome-header__logo-link" aria-label="Home">
          {logo || defaultLogo}
        </a>
        <a href="#" className="awesome-header__brand">
          {brand}
        </a>
      </div>

      {/* Center Section - Navigation */}
      <div className="awesome-header__center">
        <nav className="awesome-header__nav" role="navigation" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <div key={index} className="awesome-header__nav-item">
              <a
                href={item.href}
                className={`awesome-header__nav-link ${item.active ? 'awesome-header__nav-link--active' : ''}`}
                aria-current={item.active ? 'page' : undefined}
              >
                {item.icon && <span className="awesome-header__nav-icon">{item.icon}</span>}
                {item.label}
                {item.badge && (
                  <span className="awesome-header__nav-badge">{item.badge}</span>
                )}
              </a>
            </div>
          ))}
        </nav>
      </div>

      {/* Right Section - Actions */}
      <div className="awesome-header__right">
        <div className="awesome-header__actions">
          {/* Theme Toggle */}
          {showThemeToggle && (
            <ThemeToggle variant="icon" size="medium" showLabels={false} />
          )}

          {/* Notification */}
          <button 
            className="awesome-header__button awesome-header__button--ghost awesome-header__notification-badge"
            aria-label="Notifications"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.73 21a2 2 0 0 1-3.46 0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* User Actions */}
          {user ? (
            <>
              {/* User Avatar/Profile */}
              <div className="awesome-header__avatar" title={`Logged in as ${user.name}`}>
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} />
                ) : (
                  user.name.charAt(0).toUpperCase()
                )}
              </div>
              
              {/* Logout Button */}
              <button 
                className="awesome-header__button awesome-header__button--ghost"
                onClick={onLogout}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="16,17 21,12 16,7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="21"
                    y1="12"
                    x2="9"
                    y2="12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Login Button */}
              <button 
                className="awesome-header__button awesome-header__button--secondary"
                onClick={onLogin}
              >
                Login
              </button>
              
              {/* Sign Up Button */}
              <button 
                className="awesome-header__button awesome-header__button--primary"
                onClick={onCreateAccount}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="19"
                    y1="8"
                    x2="19"
                    y2="14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="22"
                    y1="11"
                    x2="16"
                    y2="11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Sign Up
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="awesome-header__menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" />
                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" />
                <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" />
                <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`awesome-header__mobile-menu ${isMobileMenuOpen ? 'awesome-header__mobile-menu--open' : ''}`}>
        <nav className="awesome-header__mobile-nav" role="navigation" aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`awesome-header__mobile-nav-link ${item.active ? 'awesome-header__mobile-nav-link--active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-current={item.active ? 'page' : undefined}
            >
              {item.icon && <span className="awesome-header__mobile-nav-icon">{item.icon}</span>}
              {item.label}
              {item.badge && (
                <span className="awesome-header__mobile-nav-badge">{item.badge}</span>
              )}
            </a>
          ))}
          
          {/* Mobile Actions */}
          <div className="awesome-header__mobile-actions">
            {showThemeToggle && (
              <div className="awesome-header__mobile-theme">
                <span>Theme:</span>
                <ThemeToggle variant="switch" size="small" />
              </div>
            )}
            
            {!user && (
              <>
                <button 
                  className="awesome-header__button awesome-header__button--secondary"
                  onClick={() => { onLogin(); setIsMobileMenuOpen(false); }}
                  style={{ width: '100%', marginTop: '1rem' }}
                >
                  Login
                </button>
                <button 
                  className="awesome-header__button awesome-header__button--primary"
                  onClick={() => { onCreateAccount(); setIsMobileMenuOpen(false); }}
                  style={{ width: '100%', marginTop: '0.5rem' }}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

AwesomeHeader.propTypes = {
  variant: PropTypes.oneOf([
    'modern', 'minimal', 'glass', 'gradient', 'corporate', 'neon', 'retro'
  ]),
  logo: PropTypes.node,
  brand: PropTypes.string,
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      active: PropTypes.bool,
      icon: PropTypes.node,
      badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }),
  showThemeToggle: PropTypes.bool,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  transparent: PropTypes.bool,
};