import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';

const Countries = () => {

    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36);
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];


    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
        .then((res) => setData(res.data))
    }, [])

    return (
        <div className='countries'>
            <ul className="radio-container">
                <input type="range" min='1' max='250'defaultValue={rangeValue} onChange={(e) => setRangeValue(e.target.value)} />
                {
                    radios.map((continent) => (
                        <li>
                            <input type="radio" id={continent} />
                            <label htmlFor={continent}>{continent}</label>
                        </li>
                    ))
                }
            </ul>
            <h1>Countries</h1>
            <ul>
                {
                    data
                    .slice(0, rangeValue)
                    .map((country, index) =>(<Cards key={index} country={country}/>))
                }
            </ul>
        </div>
    );
};

export default Countries;