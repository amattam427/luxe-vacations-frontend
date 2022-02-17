import React from 'react';

function DropdownFilter({setFilterArr}){
    function handleFilterChange(e){
        setFilterArr(e.target.value)
    }
    return(
        <div>
            <select name="filter" onChange={handleFilterChange}>
                <option value="All">Filter by Country</option>
                <option value="Mexico">Mexico</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Maldives">Maldives</option>
                <option value="Bora Bora">Bora Bora</option>
                <option value="St. Lucia">St. Lucia</option>
            </select>
        </div>
    )
}


export default DropdownFilter;