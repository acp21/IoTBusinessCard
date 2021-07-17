import React from 'react'
import './Post.css';

function Post(props: any){
    return (
        <div className="Post">
            <p> {props.text}</p>
        </div>
    )
}

export {
    Post
}