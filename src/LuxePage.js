import React, {useState, useEffect} from 'react';
import LuxeList from './LuxeList';

function LuxePage(){
    const [vacationArr, setVacationArr] = useState([]);
    const [filterArr, setFilterArr] = useState('All')
    
    useEffect (()=>{
        fetch('http://localhost:4000/accommodations')
        .then((r)=>r.json())
        .then(setVacationArr)
    }, [])



    const displayArr = vacationArr.filter((vacation)=> {
        if(filterArr === 'All'){
            return true
        } else{
            return vacation.location === displayArr;
        }
    })


    return (
        <div>
            
        </div>
    )
}





export default LuxePage;