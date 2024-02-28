import React from 'react';
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({tasks, onRemoveTask, setTasks, status}) => {
    return (
        <ul className='todo__block-list'>
            {
                tasks.filter((item) => {
                    if(status === 'done'){
                        return item.isDone
                    }else if(status === 'important'){
                        return item.isImportant
                    }else {
                        return true
                    }
                }).map((task) => (
                    <TaskItem key={task.id}
                              task={task}
                              setTasks={setTasks}
                              onRemoveTask={() =>
                                onRemoveTask(task.id)
                              }/>
                ))
            }
        </ul>
    );
};

export default TaskList;
