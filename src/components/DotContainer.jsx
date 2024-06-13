import React from 'react';
import Dot from './Dots';

const DotContainer = ({ numDots = 30 }) => {
  const generateRandomPosition = () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
  });

  const dots = Array.from({ length: numDots }, () => generateRandomPosition());

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 ">
      {dots.map((position, index) => (
        <Dot key={index} left={position.left} top={position.top} />
      ))}
    </div>
  );
};

export default DotContainer;