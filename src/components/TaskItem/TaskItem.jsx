import React from 'react';
import {CheckIcon, EditIcon, InfoIcon} from "@chakra-ui/icons";
import {doneHandler, importantHandler} from "../../taskService/taskService";
import EditModal from "./EditModal";

const TaskItem = ({task, onRemoveTask, setTasks}) => {
    return (
        <li className='item__delete'>

            <button onClick={() => doneHandler(task.id, setTasks)}>
                <CheckIcon color={task.isDone ? 'green' : 'black'}/>
            </button>
            <button onClick={() => importantHandler(task.id, setTasks)}>
                <InfoIcon color={task.isImportant ? 'red' : 'black'}/>
            </button>


            <p className='item__delete-text'>{task.text}</p>
            <EditModal text={task.text} id={task.id} setTasks={setTasks}/>
            <button className='item__delete-btn' onClick={onRemoveTask}>Удалить</button>
        </li>
    );
};

export default TaskItem;