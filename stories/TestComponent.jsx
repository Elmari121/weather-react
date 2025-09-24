import React from 'react';
import PropTypes from 'prop-types';

export const TestComponent = ({ text = 'Hello World' }) => {
  return (
    <div style={{ 
      padding: '1rem', 
      background: '#f0f0f0', 
      borderRadius: '8px',
      fontFamily: 'sans-serif'
    }}>
      <h2>Test Component</h2>
      <p>{text}</p>
    </div>
  );
};

TestComponent.propTypes = {
  text: PropTypes.string,
};