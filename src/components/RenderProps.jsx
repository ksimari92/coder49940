import { useState } from "react"

export const TaskList = ({tasks}) => {

    return (
        <ul>
            {tasks.map((task, index) => <li key={index}>{task.nombre}</li>)}
        </ul>
    )
}

export const Filter= ({children}) => {

    const [filterState, setFilterState] = useState("all");

    const handleInputFilter = (e) => {
        setFilterState(e.target.value)
    }

    return children(filterState, handleInputFilter)
}