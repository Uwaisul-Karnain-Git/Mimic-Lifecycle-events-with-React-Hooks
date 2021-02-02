import React, { useState, useEffect } from 'react';
//import './App.css';

let born = false;
function App() {
  const[growth, setGrowth] = useState(0);
  const[nirvana, setNirvana] = useState(false);

  useEffect(() => {
    console.log('I am born');
  }, []);

  useEffect(() => {
    if(born) {
      document.title = 'Nirvana Attained!';
    }
  }, [nirvana]);

  useEffect(() => {
    if(born) {
      console.log('Make mistakes and learn');
    }
    else {
      born = true;
    }

    if(growth == 80){
      alert('Changed the Document Title - Nirvana Attained!');  
    }
    if(growth > 70) {
      setNirvana(true);          
    }
  });

  function growthHandle() {
    setGrowth(growth + 10);
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <h2>Use Effect</h2>
        <h3>Growth: {growth}</h3>
        <button onClick={growthHandle}>Learn and Grow</button>


      </header>
    </div>
  );
}

export default App;
