import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

function Input({ theme }) {
  return (
    <div className={`mt-5 bg-${theme}-btn-bg w-full rounded-xl grid grid-cols-4 gap-3 p-5 text-2xl`}>
      <Button theme={theme} value="7" btnType="primary" />
      <Button theme={theme} value="8" btnType="primary" />
      <Button theme={theme} value="9" btnType="primary" />
      <Button theme={theme} value="DEL" btnType="secondary" extraClasses="text-sm text-white" />
      <Button theme={theme} value="4" btnType="primary" />
      <Button theme={theme} value="5" btnType="primary" />
      <Button theme={theme} value="6" btnType="primary" />
      <Button theme={theme} value="+" btnType="primary" />
      <Button theme={theme} value="1" btnType="primary" />
      <Button theme={theme} value="2" btnType="primary" />
      <Button theme={theme} value="3" btnType="primary" />
      <Button theme={theme} value="-" btnType="primary" />
      <Button theme={theme} value="." btnType="primary" />
      <Button theme={theme} value="0" btnType="primary" />
      <Button theme={theme} value="/" btnType="primary" />
      <Button theme={theme} value="x" btnType="primary" />
      <Button theme={theme} value="RESET" btnType="secondary" extraClasses="col-span-2 text-white text-sm" />
      <Button theme={theme} value="=" btnType="accent" extraClasses="col-span-2" />
    </div>
  );
}

Input.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Input;
