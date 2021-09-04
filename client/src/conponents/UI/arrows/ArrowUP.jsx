import React from 'react';
import cl from './Arrows.module.css'

const ArrowUp = () => {
    return (
        <div  className = {cl.arrow}>
            <div className = {cl.Up}></div>
            <div className = {cl.stick}></div>
        </div>
    )
};
export default ArrowUp;