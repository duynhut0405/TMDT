import React from 'react';
import {useDispatch} from 'react-redux';
import {pageGet} from '../../../action/paginate';
const Pagination = ({maxPage})=>{
    const dispatch=useDispatch();
    const pageNumbers = [];
    for(let i=1;i<=Math.ceil(maxPage);i++){
        pageNumbers.push(i);
    }
    return(
        <nav>
            <ul className="pagination">
            {
                pageNumbers.map(number=>(
                    <li key={number}>
                        <a href="#" onClick={()=>dispatch(pageGet(number))}>{number}</a>
                    </li>
                ))
            }
            </ul>
        </nav>
    )
}

export default Pagination;