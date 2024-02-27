import React from 'react';

const TaskInput = ({onAddTask}) => {
    const onFinish = (e) => {
        e.preventDefault();
        const input = e.target.label
        const inputValue = input.value
        onAddTask(inputValue)
        input.value = ''
    }

    return (
        <form onSubmit={onFinish} className='todo__block-form'>
            <input className='todo__block-input' type="text" name='label' placeholder='Напишите задачу'/>
            <button className='todo__block-btn' type='submit'>Создать</button>
        </form>
    );
};

export default TaskInput;