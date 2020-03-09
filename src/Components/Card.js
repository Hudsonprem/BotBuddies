import React from 'react';


function Card({id, name, email}){
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc" >
            <img src= {`https://robohash.org/${id}?size=200x200`} alt="robots" />
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    );
}


export default Card;

