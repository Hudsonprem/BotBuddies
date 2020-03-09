import React from "react";


const Search = (props)=>{
    // console.log(props.onSeacrh);

    return(
        <div className="pa2">
            <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="search robo Friends"
            onChange = {props.seacrhChange} />
        </div>
    )

}

export default Search;