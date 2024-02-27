import React from 'react';
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({tasks, onRemoveTask}) => {
    return (
        <ul className='todo__block-list'>
            {
                tasks.map((task) => (
                    <TaskItem key={task.id}
                              task={task}
                              onRemoveTask={() =>
                                onRemoveTask(task.id)
                              }/>
                ))
            }
        </ul>
    );
};

export default TaskList;
