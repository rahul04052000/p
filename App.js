import React from "react";
// import  ReactDOM  from "react-dom";
import "./App.css"
import Vector1 from "./img/Vector1.png";
import Vector2 from "./img/Vector2.png";
import boy from "./img/boy.png";
import glassesimoji from "./img/glassesimoji.png";
import thumbup from "./img/thumbup.png";
import crown from "./img/crown.png";
// import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "./img/github.png";
import LinkedIn from "./img/linkedin.png";
import Instagram from "./img/instagram.png";
// import { themeContext } from "../../Context";
// import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="app">
      <div className="n-wrapper">
      <div className="n-left">
           <div className="n-name">Rahul kumar</div>
      </div>
      <div className="n-right">
      <div className="n-list">
           <ul style={{listStyleType:'none'}}>
            <li>Home</li>
            <li>Services</li>
            <li>Exprencies</li>
            <li>Testmonial</li>
            <li>Portfolio</li>
           </ul>
      </div>
      <button className="button">contact</button>

      </div>
    </div>


    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span >Hy! I Am</span>
          <span>Rahul kumar</span>
          <span>
           Full Stack Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        
          <button className="button i-button">Hire me</button>
       
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* {/* animation *} */}
       

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
    </div>
  );
    
}

export default App;
