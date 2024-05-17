import React from 'react';
import styles from '../styles/board.module.css';

function Board({index, task, taskList, setTaskList}) {

    const handleDelete = () => {
        const itemRemove = taskList.indexOf((task));
        console.log("1 " + taskList);
        taskList.splice(itemRemove, 1);
        setTaskList((currentTasks => currentTasks.filter(todo => index === itemRemove)));
    }

    return (
        <>
            <div className={styles.board}>
                <p className={styles.title}>{task}</p>
                <button className={styles.deleteButton} onClick={handleDelete}>Delete</button>
            </div>
        </>
    )
}

export default Board;