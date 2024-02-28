import './styles/style.scss'
import React, {useState} from "react";
import TodoList from "./components/TodoList/TodoList";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";
import { v4 as uuidv4 } from 'uuid';
import TaskStatus from "./components/TaskStatus/TaskStatus";
import {ChakraProvider} from "@chakra-ui/react";

function App() {
    const [tasks, setTasks] = useState([])
    const [status, setStatus] = useState('all')

    const addTask = (text) => {

        const isInclude = tasks.some((task) => task.text === text)

        if(isInclude){
            alert('Данная задача уже существует')
            return
        }

    if(text.trim() !== ''){
        const newTask = {
            id:uuidv4(),
            text:text,
            isDone:false,
            isImportant:false
        };
        setTasks((prevTasks) => [...prevTasks, newTask])
    }else {
        alert('Напишите задачу')
    }
    }

    const removeTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((t) => t.id !== id))
    }

    return (
        <ChakraProvider>
            <div className="App">
                <TodoList/>
                <TaskInput onAddTask={addTask}/>
                <TaskStatus status={status} setStatus={setStatus}/>
                <TaskList status={status} setTasks={setTasks} tasks={tasks} onRemoveTask={removeTask}/>
            </div>
        </ChakraProvider>

    );
}

export default App;
