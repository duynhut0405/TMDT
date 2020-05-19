import React from 'react';
import { render } from '@testing-library/react';

function Pagination(){
    return(
        <div>
            <button>Prev</button>
            <p>{this.props.num}</p>
        </div>
    )
}

export default Pagination;