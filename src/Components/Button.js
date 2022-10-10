import React from "react"
import img from  "../../src/img/troll.png"
export default function Button(){
    function handleClick(){
        console.log("I was clicked!")
    }
    function handleOnMouseOver(){
        console.log("MouseOver")
    }
    return(
        <div className="container">
             <img src={img} />
             <button onclick={handleClick}>Click me</button>
        </div>
    )
}