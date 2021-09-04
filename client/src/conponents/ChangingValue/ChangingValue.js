import React from 'react';
import cl from './ChangingValue.module.css'
import ArrowUp from "../UI/arrows/ArrowUP";
import ArrowDown from "../UI/arrows/ArrowDown";
const ChangingValue = ({data}) => {

    const rootClasses = [cl.percent];
    if (data.change > data.price) {
        rootClasses.push(cl.more)
    }else if (data.change < data.price ) {
        rootClasses.push(cl.less)
    }

    return (
        <div className = {cl.changingData}>
            <div className = {cl.actualPrice}>{data.change} $</div>
            <div className = {cl.beforePrice} >{data.price} $</div>
            <div className = {rootClasses.join(' ')}>
                <div>{data.change_percent} %</div>
                {data.change > data.price
                    ? <ArrowUp/>
                    : <ArrowDown/>}
            </div>
        </div>
    )

};

export default ChangingValue