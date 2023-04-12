

import React from 'react';

export const useCameraDetails = ( array) => {
  return (
    <span>
      {array.map((item, index) => (
        <span key={index}>
          {index === 0 ? '' : ','} {item}
        </span>
      ))}
    </span>
  );
}


