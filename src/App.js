import './styles/style.scss'
import React, {useState} from "react";
import TodoList from "./components/TodoList/TodoList";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";


function App() {
    const [tasks, setTasks] = useState([])

    const addTask = (text) => {

        const isInclude = tasks.some((task) => task.text === text)

        if(isInclude){
            alert('Данная задача уже существует')
            return
        }

    if(text.trim() !== ''){
        const newTask = {
            id:Math.ceil(Math.random() * 99999),
            text:text,
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
        <div className="App">
            <TodoList/>
            <TaskInput onAddTask={addTask}/>
            <TaskList tasks={tasks} onRemoveTask={removeTask}/>
        </div>
    );
}

export default App;
