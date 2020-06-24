import React from 'react'
import ReactDOM from 'react-dom'

const Modal = (props) => {

    return(
      ReactDOM.createPortal(
        <div onClick={props.onClose} className={`modal ${props.show ? "display" : "hide"}`}>
          <div onClick={e => e.stopPropagation()} className="modal-content">
            <div className="close" onClick={props.onClose}><i className="fas fa-times-circle"></i></div>
            <div className="modal-header">{props.title}</div>
            <div className="modal-message">{props.message}</div>
            <div className="modal-actions">
              <button className="button button-standard" onClick={props.onContinue}>Continue</button>
              <button className="button button-standard" onClick={props.onClose}>Cancel</button>
            </div>
          </div>
        </div>, document.querySelector("#modal")
      )
    );
}

export default Modal;
