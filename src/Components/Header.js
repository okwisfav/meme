import React from "react";
import headerimg from '../../src/img/troll.png';
import '../css/Header.css';
export default function Header(){
    return(
        <header className="header">
            <img src={headerimg} 
             className="header--image"/>
            <h2 className="header--title">Header component</h2>
            <h4 className="header--project">React Course</h4>
        </header>
    )
}