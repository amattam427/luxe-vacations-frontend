import React, {useState} from 'react';
import LuxeList from './LuxeList'
import DropdownFilter from './DropdownFilter';

function LuxePage({vacationArr}){
    const [filterArr, setFilterArr] = useState('All')
    


    const displayArr = vacationArr.filter((vacation)=> {
        if(filterArr === 'All'){
            return true
        } else{
            return vacation.location === filterArr;
        }
    })




    return (
        <main>
            <DropdownFilter setFilterArr={setFilterArr}/>
            <LuxeList vacation={displayArr}/>
            
        </main>
    )
}





export default LuxePage;