export const doneHandler = (id, setTasks) => {
    setTasks((prev) => prev.map((item) => {
        if (item.id === id) {
            return {...item, isDone: !item.isDone}
        }
        return item
    }))
}

export const importantHandler = (id, setTasks) => {
    setTasks((prev) => prev.map((item) => {
        if (item.id === id) {
            return {...item, isImportant: !item.isImportant}
        }
        return item
    }))
}

export const editHandler = (id, text, setTasks, onClose) => {
    setTasks((prev) => prev.map((item) => {
        if (item.id === id) {
            return {...item, text: text}
        }
        return item
    }))
    onClose()
}