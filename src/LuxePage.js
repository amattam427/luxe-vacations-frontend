import React, {useState, useEffect} from 'react';
import LuxeItem from './LuxeItem';

function LuxePage({vacationArr}){
    const [filterArr, setFilterArr] = useState('All')
    


    // const displayArr = vacationArr.filter((vacation)=> {
    //     if(filterArr === 'All'){
    //         return true
    //     } else{
    //         return vacation.location === displayArr;
    //     }
    // })

    const displayArr = vacationArr
        .filter((vacation)=> {
            if(filterArr === 'All'){
                return true
            } else{
                return vacation.location === displayArr;
            }
        })
        .map((vacation)=>{
            return <LuxeItem key={vacation.id} vacation={vacation}/>
        });



    return (
        <div>
            <ul style={{listStyleType: 'none'}}>{displayArr}</ul>
        </div>
    )
}





export default LuxePage;