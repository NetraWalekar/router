import React from "react";
import Feedbackimg from "../../feedback.png"
import Navbar from "../../component/navbar/navbar";

function Feedback(){
    return(
    <div>
                <Navbar/>
        <h1>feedback</h1>
        <img src={Feedbackimg} style={{width:300}} alt="feedback"/>

    </div>
    )
}
export default Feedback;