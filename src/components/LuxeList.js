import React from 'react';
import LuxeItem from './LuxeItem';

function LuxeList({vacation, onUpdate}){

    return(
        <ul>
            {vacation.map((vaca)=>{
                return(
                    <LuxeItem
                        key={vaca.id}
                        vaca={vaca}
                        onUpdate={onUpdate}
                        />
                )
            })}
        </ul>
    )
}



export default LuxeList;