import React from 'react';
import '../src/sass-styling/main.scss';
import '../src/App.scss'
import CalculatorGrid from './components/Calculator/Calculator';


const App = () => {
  return (
    <React.Fragment>
      <header className='header'>
        <h2>Let us learn multiplication!</h2>
      </header>
      <CalculatorGrid/>
    </React.Fragment>

  );
}

export default App;
