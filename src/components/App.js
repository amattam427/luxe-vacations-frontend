import '../App.css';
import React, {useState, useEffect} from 'react';
import LuxePage from './LuxePage';
import Header from './Header';
import LuxeDetails from './LuxeDetails';
import NavBar from './NavBar';
//import NewReviewForm from './NewReviewForm';


import {Route, Switch} from "react-router-dom";

function App() {
  const [vacationArr, setVacationArr] = useState ([]) 
  //const [comments, setComments] = useState([])


  useEffect (()=> {
    fetch('http://localhost:4000/accommodations')
    .then((r)=>r.json())
    .then(setVacationArr)
  }, [])
  //console.log(vacationArr)

  function handleUpdate(updatedArr){
    const updateVacaArr = vacationArr.map((vacation)=>{
      if (vacation.id === updatedArr.id){
        return updatedArr
      } else {
        return vacation;
      }
    });
    setVacationArr(updateVacaArr);
  }




  return (
    <div>
      <Header/>
      <NavBar/>
      <Switch>
    
        <Route path='/details/:id' component={
          ()=><LuxeDetails/>
        }/>

      <Route exact path='/' component={ 
        ()=><LuxePage vacationArr={vacationArr} onUpdate={handleUpdate}/>
      }/>
      </Switch>
     

    </div>
  );
}

export default App;
