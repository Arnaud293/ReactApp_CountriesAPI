import React from 'react';

const Cards = ({country}) => {
    return (
        <li className="card">
            <img src={country.flags.png} alt="" />
            <div className="infos">
                <h2>{country.name.common}</h2>
                
            </div>
        </li>
    );
};

export default Cards;