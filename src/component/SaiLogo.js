import React from 'react';
import './SaiLogo.css';

const SaiLogo = ({ width = 150 }) => {
  return (
    <div className="sai-logo" style={{ width }}>
      <div className="sai-logo-text">
        <span className="sai-letter">S</span>
        <span className="sai-letter">A</span>
        <span className="sai-letter">I</span>
      </div>
    </div>
  );
};

export default SaiLogo;
