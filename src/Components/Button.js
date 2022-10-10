import React from "react"
import img from  "../../src/img/troll.png"
export default function Button(){
    return(
        <div className="container">
             <img src={img} />
             <button>Click me</button>
        </div>
    )
}