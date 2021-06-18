import React from 'react';
import PropTypes from 'prop-types';

function Header({ changeTheme, theme }) {
  const changeThemeHandler = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.value) {
      case '0':
        changeTheme('dark');
        break;
      case '1':
        changeTheme('light');
        break;
      case '2':
        changeTheme('retro');
        break;
    }
  };

  return (
    <div className=" w-3/4 flex items-center">
      <h1 className="text-3xl mr-auto">calc</h1>
      <p>THEME</p>
      <input
        type="range"
        min="0"
        max="2"
        step="1"
        defaultValue="0"
        onChange={changeThemeHandler}
        className={`bg-${theme}-btn-bg rounded-full ml-4 w-1/4 cursor-pointer`}
      />
    </div>
  );
}

export default Header;

Header.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};
