import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card">
        <div className="card-body">
            <img alt = {props.name} src = {props.image} />
        </div>
        <div className="content">
            <ul>
                <li>
                <strong>Name:</strong> {props.name}
                </li>
                <li>
                <strong>Occupation:</strong> {props.occupation}
                </li>
            </ul>
            {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
            𝘅
            </span> */}
        </div>
    </div>
);

export default Card;