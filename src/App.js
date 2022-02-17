import './App.css';
import React, {useState, useEffect} from 'react';
import LuxePage from './LuxePage';
import Header from './Header';

function App() {
  const [vacationArr, setVacationArr] = useState ([])

  useEffect (()=> {
    fetch('http://localhost:4000/accommodations')
    .then((r)=>r.json())
    .then(setVacationArr)
  }, [])


  return (
    <div>
      <Header/>
      <LuxePage vacationArr={vacationArr}/>
    </div>
  );
}

export default App;
