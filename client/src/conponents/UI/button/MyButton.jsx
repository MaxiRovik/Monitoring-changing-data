import React from 'react';
import cl from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    const rootClass = [cl.myBtn];

    if (children === 'Stop') {
        rootClass.push(cl.stop)
    }


    return (
        <button {...props} className= {rootClass.join(' ')}>
            {children}
        </button>
    )
}
export default MyButton;