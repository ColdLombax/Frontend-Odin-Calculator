import React, { useEffect, useState } from 'react';
import Calculator from './components/Calculator';
import Header from './components/Header';

function App() {
  const [currentTheme, setCurrentTheme] = useState('dark');

  useEffect(() => {}, [currentTheme]);

  return (
    <div className={`w-full h-screen bg-${currentTheme}-primary text-${currentTheme}-font flex flex-col items-center pt-10`}>
      <Header changeTheme={setCurrentTheme} theme={currentTheme} />
      <Calculator theme={currentTheme} />
    </div>
  );
}

export default App;

// Todo List
// Ensure Accessability.
// Add Box Shadow to Buttons.
// Add Functionality.
