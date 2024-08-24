import React from "react";
import Contactimg from "../../contacts.png"
import Navbar from "../../component/navbar/navbar";
function Contact(){
    return(
    <div>
        <Navbar/>
               <img src={Contactimg} style={{width:300}} alt="contact"/>
        <h1>contact</h1>
    </div>
    )
}
export default Contact;