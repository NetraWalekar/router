import React from "react";
import Navbar from "../../component/navbar/navbar";
import Aboutimg from "../../about.png"
function About(){
    return(
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
        <img src={Aboutimg} style={{width:300}} alt="about"/>
        <h1 className="nav">This is about page</h1>
        </div>
        
    </div>
    )
}
export default About;