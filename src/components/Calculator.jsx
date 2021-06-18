import React from 'react';
import PropTypes from 'prop-types';

import Display from './Calculator/Display';
import Input from './Calculator/Input';

function Calculator({ theme }) {
  return (
    <div className="flex flex-col w-3/4 mt-10">
      <Display theme={theme} />
      <Input theme={theme} />
    </div>
  );
}

Calculator.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Calculator;
