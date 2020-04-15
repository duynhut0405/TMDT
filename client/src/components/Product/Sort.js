import React from "react";
import '../../styles/components/Product/Sort.css'

function Sort(){
    return(
        <div className="sort-zone">
            <div><p>Sắp xếp:</p></div>
            <div className="sort-select">
            <select name="SortBy" id="SortBy">
            <option value="title-ascending">Từ A-Z</option>
            <option value="title-descending">Từ Z-A</option>
            <option value="price-ascending">Theo giá từ thấp đến cao</option>
            <option value="price-descending">Theo giá từ cao đến thấp</option>
            </select>
            </div>
        </div>
    )
}

export default Sort;