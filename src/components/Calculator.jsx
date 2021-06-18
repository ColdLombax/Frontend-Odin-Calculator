import React from 'react';
import PropTypes from 'prop-types';

function Calculator({ theme }) {
  return (
    <div className={`${theme}`} />
  );
}

Calculator.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Calculator;
