import React from "react";
import '../../styles/components/Product/Sort.css'
import {useDispatch} from 'react-redux';
import {sortChoose} from '../../action/sort-action';
function Sort(){
    const dispatch=useDispatch();
    function selectFunc(e) {
        //console.log(e.target.value)
        dispatch(sortChoose(e.target.value))
    }
    return(
        <div className="sort-zone">
            <div><p>Sort:</p></div>
            <div className="sort-select" onChange={selectFunc}>
            <select name="SortBy" id="SortBy" >
            <option selected value="a-z" selected>A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="low_high">Prices low - high</option>
            <option value="high_low">Prices high - low</option>
            </select>
            </div>
        </div>
    )
}

export default Sort;