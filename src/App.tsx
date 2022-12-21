import React from 'react';
import '../src/sass-styling/main.scss';
import '../src/App.scss'
import CalculatorGrid from './components/CalculatorGrid/CalculatorGrid';


const App = () => {
  return (
    <React.Fragment>
      <header className='header'>
        <h2 className='header__title'>Let us learn multiplication!</h2>
      </header>
      <main className='main'>
        <CalculatorGrid />
      </main>
    </React.Fragment>

  );
}

export default App;
