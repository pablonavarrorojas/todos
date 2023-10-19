import React, { useContext } from "react";

import './TodosLoading.css'

import { TodoContext } from "../TodoContext";

function TodosLoading() { 

    //si uso useContext(TodoContext) SIN el prefijo "React" como React.useContext(TodoContext) entonces
    //se debe importalo arriba tal como: import React, { useContext } from "react";
    const { loading } = useContext(TodoContext); 

    return (
        // <p>Loading...</p>
        <div className="LoadingTodo-container">
            <p className="LoadingTodo-text"></p>
        </div>
    )
}

export { TodosLoading };