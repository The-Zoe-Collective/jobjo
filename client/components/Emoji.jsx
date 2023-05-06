import React from 'react';

function Emoji({ label, symbol }) {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={label !== undefined ? label : ''}
      aria-hidden={label ? 'false' : 'true'}
    >
      {symbol}
    </span>
  );
}

export default Emoji;
