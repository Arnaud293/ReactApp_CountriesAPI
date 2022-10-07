import React from 'react';

const Cards = (props) => {
    return (
        <li className="card">
            <div className="infos">
                <h2>{props.country.name.common}</h2>
                <img src={props.country.flags.png} alt="" />
            </div>
        </li>
    );
};

export default Cards;