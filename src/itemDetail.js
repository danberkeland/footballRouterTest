import { useEffect, useState } from 'react';
import './App.css';




function Item({ match }) {
    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);
    console.log(match);
    const [item, setItem] =useState([]);

    const fetchItem = async () => {
        const data = await fetch(`https://v3.football.api-sports.io/teams?country=${match.params.name}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "c2607c995e26b90d5e8bf63c6379f0b0"
            }
        });
        const item = await data.json();

        let len = item.response.length;
        const newArray = [];
        for (let i=0; i<len; i++) {
            newArray.push(item.response[i])
        }
        console.log(newArray)


        setItem(newArray);
        
    }
        


    return (
        <div>
            {item.map(team => (
                <h1>
                    {team.team.name}
                </h1>
            ))}
        </div>
    );
}

export default Item;
