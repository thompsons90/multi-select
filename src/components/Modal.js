import * as React from 'react';
import ReactDom from 'react-dom';

const Modal_Styles ={
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const Overlay_Styles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7',
    zIndex: 1000
}
export default function Modal({children, open, onClose}) {
    if (!open) return null;
    

    // This will render outside of the current route
    return ReactDom.createPortal(
        <React.Fragment>
            <div style={Overlay_Styles} />

        <div style={Modal_Styles}>
            <button onClick={onClose}>Close</button>
            {children}
        </div>
        </React.Fragment>,
        document.getElementById('portal')
    )
}

