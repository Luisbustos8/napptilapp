import React from 'react';

export const useCameraDetails = ( array) => {
  
  return (
    <>
    {typeof array === array ? 
    <span>
      {array.map((item, index) => (
        <span key={index}>
          {index === 0 ? '' : ','} {item}
        </span>
      ))}
    </span>
     : <span>{array}</span> }
     </>
  );
}


