import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

/**
 * Animated theme toggle switch component
 */
export const ThemeToggle = ({
  size = 'medium',
  showLabels = true,
  variant = 'switch',
  className = '',
  disabled = false,
  ...props
}) => {
  const { theme, toggleTheme, isDark } = useTheme();

  const handleToggle = () => {
    if (!disabled) {
      toggleTheme();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  // Base CSS classes
  const baseClasses = [
    'theme-toggle',
    `theme-toggle--${variant}`,
    `theme-toggle--${size}`,
    disabled && 'theme-toggle--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Switch variant
  if (variant === 'switch') {
    return (
      <div className={baseClasses} {...props}>
        {showLabels && (
          <span className="theme-toggle__label theme-toggle__label--left">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="theme-toggle__icon theme-toggle__icon--sun"
            >
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41" stroke="currentColor" strokeWidth="2" />
            </svg>
          </span>
        )}
        
        <button
          type="button"
          role="switch"
          aria-checked={isDark}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          className="theme-toggle__switch"
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          disabled={disabled}
        >
          <span className="theme-toggle__slider">
            <span className="theme-toggle__thumb">
              {isDark ? (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="theme-toggle__thumb-icon"
                >
                  <path
                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="theme-toggle__thumb-icon"
                >
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41" stroke="currentColor" strokeWidth="1" />
                </svg>
              )}
            </span>
          </span>
        </button>

        {showLabels && (
          <span className="theme-toggle__label theme-toggle__label--right">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="theme-toggle__icon theme-toggle__icon--moon"
            >
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </span>
        )}
      </div>
    );
  }

  // Button variant
  if (variant === 'button') {
    return (
      <button
        type="button"
        className={baseClasses}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        {...props}
      >
        <span className="theme-toggle__button-content">
          {isDark ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="theme-toggle__icon"
            >
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41" stroke="currentColor" strokeWidth="2" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="theme-toggle__icon"
            >
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          )}
          {showLabels && (
            <span className="theme-toggle__button-text">
              {isDark ? 'Light' : 'Dark'}
            </span>
          )}
        </span>
      </button>
    );
  }

  // Icon variant
  return (
    <button
      type="button"
      className={baseClasses}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      {...props}
    >
      <span className="theme-toggle__icon-wrapper">
        {isDark ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="theme-toggle__icon theme-toggle__icon--sun"
          >
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41" stroke="currentColor" strokeWidth="2" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="theme-toggle__icon theme-toggle__icon--moon"
          >
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        )}
      </span>
    </button>
  );
};

ThemeToggle.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  showLabels: PropTypes.bool,
  variant: PropTypes.oneOf(['switch', 'button', 'icon']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};