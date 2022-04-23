import React from 'react'
import './Popup.css'

function Popup(props) {

  return (props.trigger) ? (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h8 className="modal-title" id="exampleModalLabel">Contact Us</h8>
          <button type="button" onClick={() => props.setTrigger(false)}
            className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            
  </div>  
        <div className="modal-body">
          <form>
            <label for="name" className="form-label">Name </label>
            <input type="name" className="form-control" />
              <label for="name" className="form-label">Email </label>
              <input type="email" className="form-control" />
                <label for="number" className="form-label">Phone number </label>
                <input type="number" className="form-control" />
                  <label for="message" className="form-label">Message</label> <br/>
                    <textarea name="message" cols="30" rows="3"></textarea>           
                     </form>
              </div>
      <div className="modal-footer">
        <button type="button" onClick={() => props.setTrigger(false)}  className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
              </div> 
              </div>
            ) : "";
}

export default Popup