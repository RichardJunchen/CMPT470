import React, { useState, useEffect, useRef, Component } from 'react';
// import { useHistory } from 'react-router-dom';
import './LeftIngList.css';
import PubSub from 'pubsub-js'
import { Link } from "react-router-dom";

function LeftIngList() {
    //const history = useHistory();
    const [Ings, setIng] = useState([]);
    const refValue = useRef(Ings);

    useEffect(() => {
        refValue.current = Ings;
    });

    React.useEffect(() => {
        PubSub.subscribe('ADD ING', mySubscriber);
    }, [])

    const mySubscriber = (msg, data) => {
        if (refValue.current.indexOf(data) === -1) {
            setIng(Ings => [...Ings, data]);
        }
        // console.log(refValue.current);
    };

    const handleDelete = value => {
        setIng(Ings.filter(item => item !== value))
    }

    const handleSearch = () => {
        var result = '';
        if (Ings.length > 0) {
            result = Ings.join(',');
        } else {
            result = Ings;
        }
        // // console.log('once');
        if (Ings.length === 0) {
            // return {pathname:"/"};
            return "/";
        } else {
            // console.log(result);
            // return {pathname:"/recipes/search/rfi2/"+result};
            return ("/recipes/search/rfi2/" + encodeURIComponent(result));
        }

    }

    return (
        <div className='IngList'>
            <ul className='UnorderedList'>
                {Ings.map((Ing) => {
                    return (
                        <li>
                            <sapn className='span1'>{Ing}</sapn>
                            <button onClick={() => handleDelete(Ing)} className='delete-button'>DELETE</button>
                        </li>
                    )
                })}
            </ul>
            {/* <Link to={handleSearch()} >
                <button className='search-button'>Search</button>
            </Link> */}
            <a href={handleSearch()} >
                <button className='search-button'>Search</button>
            </a>
        </div>
    )
}

export default LeftIngList;