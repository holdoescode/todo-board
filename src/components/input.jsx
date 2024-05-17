import React, { useState } from 'react';
import Board from './board';
import styles from '../styles/input.module.css';

function Input({ taskList, setTaskList }) {

const [ input, setInput ] = useState("");

const handleChange = (e) => {
    setInput(e.target.value);
}

const handleClick = (e) => {
    e.preventDefault();
    setTaskList([...taskList, input]);
    setInput("");
}

    return (
        <>
            <form>
                <input 
                    id="input"
                    name="input"
                    type="text" 
                    value={input} 
                    placeholder="Add a task..."
                    onChange={handleChange}>
                </input>
                <button type="submit" onClick={handleClick}>Add</button>
            </form>
        </>
    )
}

export default Input;