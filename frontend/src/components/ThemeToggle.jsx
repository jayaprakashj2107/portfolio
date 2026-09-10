import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-outline-custom p-2 d-flex align-items-center justify-content-center"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{ width: '42px', height: '42px', borderRadius: '50%' }}
    >
      {theme === 'dark' ? (
        <Sun size={20} className="text-warning" />
      ) : (
        <Moon size={20} className="text-primary" />
      )}
    </button>
  );
};

export default ThemeToggle;
