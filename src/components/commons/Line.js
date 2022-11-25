import React from 'react';

const Line = ({ position, style }) => {
  return (
    <div className={`${style} ${position} bg-white opacity-50 absolute`}></div>
  );
};

export default Line;
