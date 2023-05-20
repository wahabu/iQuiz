import React from 'react';
import { Transition } from 'react-transition-group';

const duration = 500;

const ProgressBar = ({ in: inProp, remainingSeconds }) => {
  const defaultStyle = {
    width: '100%',
    height: '10px',
    backgroundColor: 'orange',
    marginTop: '10px',
    overflow: 'hidden',
  };

  const animationStyle = {
    width: `${remainingSeconds / duration * 100}%`,
    animation: `progressBarAnimation ${duration}ms linear forwards`,
  };
  

  return (
    <div style={defaultStyle}>
      <div
        style={animationStyle}
        className={inProp ? 'progressBarAnimated' : ''}
      />
    </div>
  );
};

export default ProgressBar;
