import React from 'react';


function Card({id, name, email}){
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc" >
            <img src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="robots" />
            <div>
                <h1>{name}</h1>
                <p>{"🌟"}</p>
            </div>
        </div>
    );
}


export default Card;
