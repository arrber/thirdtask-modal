import React from 'react';
import './Modal.scss'

const Modal = () => {
    return (
        <div className="modal-holder">
            <div className="modal-title">
                <h3 className="title">Theme Color</h3>
                <p className="info">Change Theme</p>
            </div>
            <div className="modal-body">
                <div className="theme-type font-color">
                    <p>Font Color</p>
                    <div className="theme">
                        <p>Color of it</p>
                        <div className="color"></div>
                    </div>
                </div>
                <div className="theme-type background-color">
                <p>Font Color</p>
                    <div className="theme">
                        <p>Color of it</p>
                        <div className="color"></div>
                    </div>
                </div>
                <div className="theme-type button-color">
                <p>Font Color</p>
                    <div className="theme">
                        <p>Color of it</p>
                        <div className="color"></div>
                    </div>
                </div>
                <div className="theme-type button-border-color">
                <p>Font Color</p>
                    <div className="theme">
                        <p>Color of it</p>
                        <div className="color"></div>
                    </div>
                </div>
                <div className="theme-type buttons-mouseover-color">
                <p>Font Color</p>
                    <div className="theme">
                        <p>Color of it</p>
                        <div className="color"></div>
                    </div>
                </div>
            </div>
            <div className="modal-buttons">
                <button>Close</button>
                <button>Save</button>
            </div>
        </div>
    );
};

export default Modal;