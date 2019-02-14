import React from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";

const Modal = props => (
    <div>
        <Backdrop show={props.show} clicked={props.closed}/>
        <div className={"Modal" + (props.show ? ' Modal-show' : '')}
        >
            <div className="modal-header">
                <h5 className="modal-title">
                    {props.title}
                </h5>
            </div>
            {props.children}
            <Button btnType="Danger" clicked={props.modalCancelled}>Close</Button>
        </div>
    </div>

);


export default Modal;