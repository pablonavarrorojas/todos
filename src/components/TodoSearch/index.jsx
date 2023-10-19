import React from "react";
import './TodoSearch.css';
import { TodoContext } from "../TodoContext";

function TodoSearch() { 

    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    return (
        <input className="TodoSearch"
            value={ searchValue }
            type="text"
            placeholder="Search"
            onChange={(event) => { 
                // console.log(event)
                // console.log(event.target)
                // console.log(event.target.value)
                setSearchValue(event.target.value)
            } } />
    )
}

export { TodoSearch };