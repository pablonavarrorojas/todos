import React, { useContext } from "react";

import './TodosLoading.css'

import { TodoContext } from "../TodoContext";

function TodosLoading() { 

    const { loading } = useContext(TodoContext); 

    return (
        <div className="LoadingTodo-container">
            <p className="LoadingTodo-text"></p>
        </div>
    )
}

export { TodosLoading };