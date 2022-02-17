import React from 'react';
import LuxeItem from './LuxeItem';

function LuxeList({vacation}){

    return(
        <ul>
            {vacation.map((vaca)=>{
                return(
                    <LuxeItem
                        key={vaca.id}
                        vaca={vaca}
                        />
                )
            })}
        </ul>
    )
}



export default LuxeList;