import React from 'react';
import { useState } from 'react'


const Filter = (props) => {
    return(
    <div>
        <form onSubmit={props.searchEvent}>
        filter<input value={props.searchName} onChange={props.handleFilterChange}/>
        <div><button type="submit"> search</button></div>
        </form>
      </div>
    )
}
export default Filter