import React, { useEffect, useState } from 'react';
import {Logo} from '../../imgs/imgs';
import useScrollPosition from '../../RainUI/useScrollPosition';

export default function Topbar() {
  const [scrolled,setScrolled] = useState(false);
  const position = useScrollPosition();
  const [active,setActive] = useState("home");
  const goToHome = () => {
    document.getElementById("homepage")?.scrollIntoView({behavior:'smooth'});
  }
  const goToAbout = () => {
    document.getElementById("about")?.scrollIntoView({behavior:'smooth'});
  }
  const goToRoadmap = () => {
    document.getElementById("roadmap")?.scrollIntoView({behavior:'smooth'});
  }
  const goToPartner = () => {
    document.getElementById("partners")?.scrollIntoView({behavior:'smooth'});
  }
  const goToTeam = () => {
    document.getElementById("Team")?.scrollIntoView({behavior:'smooth'})
  }
  useEffect(()=>{
    if (position == 0){
     if (scrolled) setScrolled(false);
    } else {
      
      if (!scrolled) setScrolled(true);
      var home = document.getElementById("homepage");
      var about = document.getElementById("about");
      var roadmap = document.getElementById("roadmap");
     var partner = document.getElementById("partners");
      var Team = document.getElementById("Team");
      if (isAtTop(home)){
            if (active != "home") setActive("home");
      }
      else if (isAtTop(about)) {
            if (active != "about") setActive("about");
      }
      else if (isAtTop(roadmap)) {
          if (active != "roadmap") setActive("roadmap");
      }
      else if (isAtTop(partner)) {
        if (active != "partner") setActive("partner");
      }
      else if(isAtTop(Team)) {
        if (active != "team") setActive("team");
      }
    }
  },[position]);
  
  return (
    <section className={`navbar-section  ${scrolled?"scrolled":""}`}>
        <nav className="phoenixbar">
                <img id="nav-brand" src={Logo}/>
                <div className="nav-content">
                    <div className="nav-links">
                        <a className={`${active == "home" ? "active" : ""}`}id="nav-link" onClick={(goToHome)}>Home</a>
                        <a className={`${active == "about" ? "active" : ""}`} id="nav-link"onClick={(goToAbout)}>About</a>
                        <a className={`${active == "roadmap" ? "active" : ""}`} id="nav-link"onClick={(goToRoadmap)}>RoadMap</a>
                        <a className={`${active == "partner" ? "active" : ""}`} id="nav-link"onClick={(goToPartner)}>PartnerShips</a>
                        <a className={`${active == "team" ? "active" : ""}`} id="nav-link"onClick={(goToTeam)}>Team</a>
                        <a href="contactus" id="nav-link">Contact Us</a>
                    </div>
                    <div className="nav-button-wrapper">
                        <button className=""></button>
                    </div>
                </div>
            
        </nav>

    </section>
  )
  }

function isAtTop(el:any) {
  return el.getBoundingClientRect().top >= 0 && (el.getBoundingClientRect().top <= 300 || el.getBoundingClientRect().top <= (-300));
}
