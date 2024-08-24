import React from "react";
import Navbar from "../../component/navbar/navbar";
import Homeimg from './../../house.png'
function Home(){
    return(
    <div>
        <div><Navbar/></div>
       <img src={Homeimg} style={{width:300}} alt="house"/>
        <h1 className="nav">This is home page</h1>
    </div>
    )
}
export default Home;