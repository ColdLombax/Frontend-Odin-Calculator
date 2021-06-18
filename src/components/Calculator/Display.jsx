import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Display({ theme }) {
  const [displayValue] = useState('320,444');
  return (
    <div className={` bg-${theme}-screen-bg w-full rounded-xl flex justify-end items-center`}>
      <p className="mr-5 text-3xl pt-7 pb-7">{displayValue}</p>
    </div>
  );
}

Display.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Display;
