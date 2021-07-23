import React from 'react'
import './Post.css';

// Convert a character string to it's morse equivalent
let strToMorse = (str: string) => {
    let output: string = ""
    for(let i = 0; i < str.length; i++){
        output = output.concat(".");
    }
    return output;
};


function Post(props: any){
    return (
        <div className="Post">
            <h2 className="ID">Thing {props.ID} says...</h2>
            <p>{props.text}</p>
            <h3 className="MorseTitle">Morse Transcription</h3>
            <p className="Morse">{strToMorse(props.text)}</p>
        </div>
        
    )
}

export {
    Post
}