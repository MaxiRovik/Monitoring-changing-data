import React from 'react';
import cl from './Arrows.module.css'

const ArrowDown = () => {
    return (
        <div  className={cl.arrow}>
            <div className = {cl.stick}></div>
            <div className = {cl.Down}></div>
        </div>
    )
};
export default ArrowDown;