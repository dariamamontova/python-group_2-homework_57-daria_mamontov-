import React from 'react';
import './Alert.css';
import Button from "../Button/Button";

function Alert(props) {
    let buttonAlert = <Button btnType="Danger" clicked={props.dismissed}>Close</Button>;
    if (props.dismissed === undefined) buttonAlert = null;
    return <div>
        <div className={['Alert alert', props.type, (props.show ? 'show' : 'fade')].join(' ')}
        >
            {props.children}
            {buttonAlert}
        </div>
    </div>

};


export default Alert;