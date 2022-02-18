import React, {useState} from 'react';
import LuxeList from './LuxeList'
import DropdownFilter from './DropdownFilter';

function LuxePage({vacationArr, onUpdate}){
    const [filterArr, setFilterArr] = useState('All')
    


    const displayArr = vacationArr.filter((vacation)=> {
        if(filterArr === 'All'){
            return true
        } else{
            return vacation.location === filterArr;
        }
    })




    return (
        <main className="body" >
            <DropdownFilter setFilterArr={setFilterArr}/>
            <LuxeList vacation={displayArr} onUpdate={onUpdate}/>
            
        </main>
    )
}





export default LuxePage;