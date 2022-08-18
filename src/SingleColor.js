import React, { useState, useEffect } from 'react';
import rgbToHex from './Utils';

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb);
  useEffect(() => {
    navigator.clipboard.writeText(hex);
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <section
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => setAlert(true)}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='hex-value'>{hex}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </section>
  );
};

export default SingleColor;
