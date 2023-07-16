import React from 'react';
import useTheme from '../useTheme';

const Switch = () => {
  const { theme, toggleTheme } = useTheme();

  const handleChange = () => {
    toggleTheme();
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={handleChange}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;