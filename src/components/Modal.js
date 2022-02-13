import React from 'react';
import './Modal.scss'

const Modal = (props) => {
    return (
        <div className="modal-holder">
            <div className="modal-title">
                <p className="title">Theme Color</p>
                <p className="info">Change Theme</p>
            </div>
            <div className="modal-body">
                <div className="theme-type">
                    <div className="font-color">
                        <p>Font Color</p>
                        <div className="theme">
                            <p>#444444</p>
                            <div className="color"></div>
                        </div>
                    </div>
                </div>
                <div className="theme-type">
                    <div className="background-color">
                        <p>Background Color</p>
                            <div className="theme">
                                <p>#FFFFFF</p>
                                <div className="color"></div>
                            </div>
                        </div>
                    </div>
                <div className="theme-type">
                    <div className="button-color">
                        <p>Button Color</p>
                            <div className="theme">
                                <p>#2072EF</p>
                                <div className="color"></div>
                            </div>
                        </div>
                    </div>
                <div className="theme-type">
                    <div className="button-border-color">
                        <p>Button Border Color</p>
                            <div className="theme">
                                <p>#2072EF</p>
                                <div className="color"></div>
                            </div>
                        </div>
                    </div>
                <div className="theme-type">
                    <div className="buttons-mouseover-color">
                        <p>Buttons Mouseover Color</p>
                            <div className="theme">
                                <p>#0053D1</p>
                                <div className="color"></div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="modal-buttons">
                <button className="btn-close" onClick={props.close} >Close</button>
                <button className="btn-save">Save</button>
            </div>
        </div>
    );
};

export default Modal;