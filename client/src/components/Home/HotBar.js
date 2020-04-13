import React from 'react';
import '../../styles/components/Home/HotBar.css';
const HotBar=()=>{
    return(
        <div className="bar-wrapper">
            <div className="hot-text">
                <p>HOT!!!</p>
            </div>
            <div className="watchmore">
                <p><a href="#">Xem thêm</a></p>
            </div>
        </div>
    );
}
export default HotBar;