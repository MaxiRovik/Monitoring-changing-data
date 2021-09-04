import React,{useState, useEffect} from 'react';
import cl from "./TickerCard.module.css"
import MyButton from "../UI/button/MyButton.jsx";
import {doRightName} from "../../utils/doRightName";
import {parseDateAndTime} from "../../utils/parseDateAndTime";
import TickerName from "../TickerName/TickerName";
import DateAndTime from "../DateAndTime/DateAndTime";
import ChangingValue from "../ChangingValue/ChangingValue";

const TickerCard = ({info}) => {

    const [comingData, SetStateComingData] = useState(info);
    const [buttonContent, setButtonContent]= useState('Stop');
    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=>{
        if (isOnline) {
            SetStateComingData(info)
        } else if (!isOnline){
                SetStateComingData((prev, newInfo)=>{
                return prev
                })
        }
        },[info]);

    const [date, time] = parseDateAndTime(comingData.last_trade_time);
    const companyName = doRightName(comingData.ticker);

    const changeComponentState = () => {
        if (buttonContent === 'Stop'){
            setButtonContent('Online');
            setIsOnline(false)
        } else  {
            setButtonContent('Stop');
            setIsOnline(true)
        }
};

    return (
        <div className = {cl.cardWrapper}>
            <TickerName data={comingData} companyName={companyName} />
            <h2 >{comingData.exchange}</h2>
            <DateAndTime date={date} time = {time}/>
            <ChangingValue data = {comingData}/>
            <MyButton onClick ={()=> changeComponentState()}>{buttonContent}</MyButton>
        </div>
    )
};

export default TickerCard;