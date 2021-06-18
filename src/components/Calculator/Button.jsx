import React from 'react';
import PropTypes from 'prop-types';

function Button({
  theme, btnType, value, extraClasses,
}) {
  return (
    <div
      className={`flex justify-center items-center pl-5 pr-5 p-3 bg-${theme}-btn-${btnType} 
        ${theme} rounded-md ${btnType === 'secondary' ? 'text-white' : `${btnType === 'accent' && theme === 'retro' ? 'text-black' : `text-${theme}-btn-font`}`} ${extraClasses}`}
    >
      {value}
    </div>
  );
}

Button.propTypes = {
  theme: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  extraClasses: PropTypes.string,
};

Button.defaultProps = {
  extraClasses: '',
};

export default Button;
