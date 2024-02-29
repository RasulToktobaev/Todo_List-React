import React from 'react';
import {Progress} from '@chakra-ui/react'

const TaskProgress = ({status, tasksCount, totalTasksCount}) => {

    const calculateProgress = () => ((tasksCount / totalTasksCount) * 100).toFixed(2)

    const getMessage = () => {
        if (status === 'done') {
            return `Completed ${tasksCount} tasks, ${calculateProgress()} % of total tasks`
        } else if (status === 'important') {
            return `In progress with ${tasksCount} important tasks, ${calculateProgress()} % of total tasks`
        } else {
            return `In progress with ${tasksCount}, ${calculateProgress()} % of total tasks`
        }
    }

    const getEmptyTasksMessage = () => {
        return `Tasks with this status ${status} not found`
    }

    return (
        tasksCount > 0 ? <>
            <h2 className='tasks__progress-title'>{getMessage()}</h2>
            <div className='tasks__progress-line'>
                <Progress value={calculateProgress()}/>
            </div>
        </> : <p className='tasks__progress-text'>{getEmptyTasksMessage()}</p>
    )
        ;
};

export default TaskProgress;