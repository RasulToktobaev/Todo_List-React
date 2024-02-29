import React from 'react';
import TaskItem from "../TaskItem/TaskItem";
import TaskProgress from "../TaskProgress/TaskProgress";

const TaskList = ({tasks, onRemoveTask, setTasks, status}) => {

    const filteredTasks = tasks.filter((item) => {
        if (status === 'done') {
            return item.isDone
        } else if (status === 'important') {
            return item.isImportant
        } else {
            return true
        }
    })

    const currentTasksCount = filteredTasks.length

    const totalTasksCount = tasks.length

    return (
        <>
            <TaskProgress
                status={status}
                tasksCount={currentTasksCount}
                totalTasksCount={totalTasksCount}/>
            <ul className='todo__block-list'>
                {filteredTasks.map((task) => (
                    <TaskItem key={task.id}
                              task={task}
                              setTasks={setTasks}
                              onRemoveTask={() =>
                                  onRemoveTask(task.id)
                              }
                    />
                ))}
            </ul>
        </>
    );
};

export default TaskList;
