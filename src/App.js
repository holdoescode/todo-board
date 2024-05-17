import React, { useState } from 'react';
import Input from './components/input';
import Board from './components/board';
import styles from './styles/app.module.css';
import './styles/appstyle.css';

function App() {

  const [ taskList, setTaskList ] = useState([]);

  return (
    <>
      <div className={styles.app}>
        <h1>To-do App</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />

          <div className={styles.card}>
            {taskList.map((task, index) => {
              return <Board key={index} index={index} task={task} taskList={taskList} setTaskList={setTaskList}/>
            })}
          </div>

      </div>
    </>
  );
}

export default App;
