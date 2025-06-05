import React from "react";
import './Modal.css'

export const Modal = ({active, setActive, children }) => {
    
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modalContent active" : "modalContent"} onClick={() => setActive(false)}>
                <div className="modalContent" onClick={e => e.stopPropagation()}>
                    { children}
                </div>
            </div>
        </div>
    )
}

