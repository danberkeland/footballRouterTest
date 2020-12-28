import { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';



function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] =useState([]);

    const fetchItems = async () => {
        const data = await fetch("https://v3.football.api-sports.io/countries", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "c2607c995e26b90d5e8bf63c6379f0b0"
            }
        });
        const items = await data.json();
        
        let len = items.response.length;
        const newArray = [];
        for (let i=0; i<len; i++) {
            newArray.push(items.response[i])
        }
        console.log(newArray)


        setItems(newArray);
    }
        


    return (
        <div>
            {items.map(item => (
                <h1 key={item.code}>
                    <Link to={`/shop/${item.name}`}>{item.name}</Link>
                    </h1>
            ))}
        </div>
    );
}

export default Shop;
