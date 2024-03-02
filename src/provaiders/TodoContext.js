import {createContext, useState} from "react";

export const TodoContext = createContext()

const TodoContextProvider = ({children}) => {

    return (
        <TodoContext.Provider>

            {

                children
            }
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;







