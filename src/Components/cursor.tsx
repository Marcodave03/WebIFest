// CursorCircle.tsx
import React from 'react';
import '../App.css';

interface CursorCircleProps {
  x: number;
  y: number;
}

const CursorCircle: React.FC<CursorCircleProps> = ({ x, y }) => {
  return <div className="CursorCircle" style={{ top: y, left: x }} />;
};

export default CursorCircle;
