import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Card = (props) => {

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent;
    }

    return (
        <div className="post" key={props.id}>
            <div className="img">
                <img src={`../upload/${props.img}`} alt="" />
            </div>
            <div className="content">
                <Link className="link" to={`/post/${props.id}`}>
                    <h1>{props.title}</h1>
                </Link>
                <p>{getText(props.desc)}</p>
                <Link className="link" to={`/post/${props.id}`}>
                    <button>Read More</button>
                </Link>
            </div>
        </div>
    )
}

export default Card;