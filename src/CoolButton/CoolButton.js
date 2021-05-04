import React from 'react';
import 'bulma/css/bulma.css';

function CoolButton({children, isSmall, isSuccess, isDanger, isRounded, customClass}){
    let myClass = "button ";

    if(isSmall === true) {
        myClass += "is-small " 
    }
    if(isDanger) {
        myClass += "is-danger " 
    }
    if(isSuccess) {
        myClass += "is-success " 
    }
    if(isRounded) {
        myClass += "is-rounded " 
    }

    myClass += customClass

    return (
        <div>
            <button className={myClass}>{children}</button>
        </div>
    )
}


export default CoolButton;