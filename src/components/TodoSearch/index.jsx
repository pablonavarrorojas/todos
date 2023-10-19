import React from "react";
import './TodoSearch.css';
import { TodoContext } from "../TodoContext";

function TodoSearch() { 

    //estado inicial es un string vacio | Este estado se pasó a APP
    //const [searchValue, setSearchValue] = React.useState('');
    // console.log('los users buscan todo de '+searchValue)

    //si uso React.useContext(TodoContext) CON el prefijo "React" como React.useContext(TodoContext) entonces
    //NO debpimportalo arriba tal como: import React, { useContext } from "react"; osea sin el "import React, { useContext } from "react";"
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    return (
        <input className="TodoSearch"
            value={ searchValue }
            type="text"
            placeholder="Search"
            onChange={(event) => { 
                console.log('Escribiste en todo search: ')
                // console.log(event)
                // console.log(event.target)
                console.log(event.target.value)
                setSearchValue(event.target.value)
            } } />
    )
}

export { TodoSearch };