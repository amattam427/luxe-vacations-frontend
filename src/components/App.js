import '../App.css';
import React, {useState, useEffect} from 'react';
import LuxePage from './LuxePage';
import Header from './Header';
import LuxeDetails from './LuxeDetails';


import {Route, Switch} from "react-router-dom";

function App() {
  const [vacationArr, setVacationArr] = useState ([])


  useEffect (()=> {
    fetch('http://localhost:4000/accommodations')
    .then((r)=>r.json())
    .then(setVacationArr)
  }, [])
  //console.log(vacationArr)


  return (
    <div>
      <Header/>
      <Switch>
        <Route path='/reviews/:id' component={
          ()=><LuxeDetails/>
        }/>
        
      <Route exact path='/' component={ 
        ()=><LuxePage vacationArr={vacationArr}/>
      }/>
      </Switch>
     

    </div>
  );
}

export default App;
