import React from 'react';
import './App.css';
import Home from './pages/home';

function App() {
  const data={name:'foo',value:'bar'};
  return (
    <div className="App">
      <Home {...data}></Home>
    </div>
  );
}

export default App;
