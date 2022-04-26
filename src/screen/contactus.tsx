import React, { useRef, useState } from 'react'
import './contactus.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Contactus() {
    const [addressErr, setAddressErr] = useState(false);
    const [subjectErr, setSubjectErr] = useState(false);
    const [messageErr, setMessageErr] = useState(false);
    let navigate = useNavigate();
    const address = useRef() as React.MutableRefObject<HTMLInputElement>;
    const subject = useRef() as React.MutableRefObject<HTMLInputElement>;
    const message = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
    const sendEmail = () => {
        if (address.current.value.length <= 4 ) {
            setAddressErr(true);
        } else {
            if (addressErr) setAddressErr(false); 
        }

        if (subject.current.value.length <= 4 ) {
            setSubjectErr(true);
        } else {
            if (subjectErr) setSubjectErr(false); 
        }

        if (message.current.value.length <= 49 ) {
            setMessageErr(true);
        } else {
            if (messageErr) setMessageErr(false); 
        }
        if (!messageErr && !subjectErr && !addressErr) {
            axios({
                method: 'POST',
                url: 'http://localhost:5000/sendEmail',
                data: {message: message.current.value, subject: subject.current.value, address: address.current.value},
            
            }).then(()=> {
                
            }).catch((err)=> {
                console.log(err);
            });
        }
       
    }
  return (
      <>
    <div className="form-container">
    <h1 className="form-header">Contact Us</h1>
    
     <div className="form-flexbox">
         
         <div className="form-row" id="addressandsubject">
             <div className="input-wrapper">	
                 <label htmlFor="address">Address</label>	
                 <input type="mail" id="address" placeholder="example@gmail.com" ref={address}/>
                 <label className="errorMsg" id="address-error" hidden={!addressErr}>Cannot be empty!</label> 
             </div>
             <div className="input-wrapper">		
                 <label htmlFor="subject">Subject</label>
                 <input type="text" id="subject" placeholder="Potential Partner?" ref={subject}/>
                 <label className="errorMsg" id="subject-error" hidden={!subjectErr}>Cannot be empty!</label> 
             </div>
         </div>
         <div className="form-row">
             <div className="input-wrapper">	
                 <label htmlFor="message">Message</label>	
                 <textarea id="message" placeholder="must be 40-400 characters" ref={message}></textarea>
                 <label className="errorMsg" id="message-error" hidden={!messageErr}>Cannot be empty!</label> 
             </div>
         </div>
         <button className="btn" onClick={sendEmail}>Send</button>
         <p>Usually waiting time for a response is within 2 days. However, we try to be fast!</p>
        
     </div>
 
 </div>
 <a className="btn" id="back" onClick={()=>{navigate('/')}}>Back</a>
 </>
  )
}
