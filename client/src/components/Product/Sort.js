import React from "react";
import '../../styles/components/Product/Sort.css'

function Sort(){
    return(
        <div className="sort-zone">
            <div><p>Sort:</p></div>
            <div className="sort-select">
            <select name="SortBy" id="SortBy">
            <option value="title-ascending">A-Z</option>
            <option value="title-descending">Z-A</option>
            <option value="price-ascending">Prices low - high</option>
            <option value="price-descending">Prices high - low</option>
            </select>
            </div>
        </div>
    )
}

export default Sort;