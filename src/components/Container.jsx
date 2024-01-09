import React from 'react'
import { Filter, TaskList } from './RenderProps'

const Container = () => {
    const tasks = [
        { nombre: "Comprar", completed: true },
        { nombre: "Comer", completed: false },
        { nombre: "Limpiar", completed: true },

    ]
    return (
        
         <Filter>
            {
                (filterState, handleInputFilter)=> (
                    <div>
                        <label htmlFor="filter">Filtrar por estado</label>
                        <select id="filter" value={filterState} onChange={handleInputFilter}>
                            <option value="all">Todos</option>
                            <option value="completed">Completas</option>
                            <option value="incompleted">Incompletas</option>
                        </select>
                        <TaskList 
                        tasks={
                            filterState === "all" ? 
                            tasks :
                            tasks.filter(task => filterState === "completed" ? task.completed : !task.completed)
                        }/>
                    </div>
                )
            }
         </Filter>
        
    )
}

export default Container