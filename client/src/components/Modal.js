import React from 'react';
import ReactDOM from 'react-dom';


const Modal = props =>{
   return ReactDOM.createPortal(
       <div className="ui dimmer modals visib;e active">
        <div className="ui standard modal visible active">
            helloooooooooo
            gfdgdffg gdfg fd
        </div>
        </div>,
        document.querySelector('#modal')
   )
};

export default Modal;
