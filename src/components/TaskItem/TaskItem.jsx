import React from 'react';

const TaskItem = ({task, onRemoveTask}) => {
    return (
        <li className='item__delete'>
            <p className='item__delete-text'>{task.text}</p>
            <button className='item__delete-btn' onClick={onRemoveTask}>Удалить</button>
        </li>
    );
};

export default TaskItem;