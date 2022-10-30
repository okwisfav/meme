import React from "react"
import '../css/Meme.css';
import memesData from "../data/memesData"
export default function Meme(){

    let url
    function getMemeImage () {
       const memesArray = memesData.data.memes
       const randomNumber = Math.floor(Math.random() * memesArray.length)
       url = memesArray[randomNumber].url
       console.log(url)
    }
    return(
        <div>
            <form className="form">
                <p>{url}</p>
                 <input
                 type="text"
                 placeholder="Top text"
                 className="form--input"
                 />
                <input 
                   type="text"
                   placeholder="Bottom text"
                   className="form--input"
                   onClick={getMemeImage}
                   />
                <button 
                className="form--button">Get a new image </button>
            </form>
        </div>
    )
}