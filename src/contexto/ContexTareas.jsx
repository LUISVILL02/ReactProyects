import {createContext, useState, useEffect} from 'react'
import {tareas as dato} from '../tareas' 

export const tareaContexto = createContext()

export function ContexTareasProvider(props) {
    const [tareas, settareas] = useState([])

    function crearTareas(tarea){
        settareas([...tareas, {
        titulo: tarea.titulo,
        descripcion: tarea.descripcion,
        id: tareas.length
        }])
    }
    function eliminarTareas(idTarea){
        settareas(tareas.filter(tarea => tarea.id !== idTarea))
    }
    useEffect(() => {
        settareas(dato)
    }, [])

    return (
        <tareaContexto.Provider value = {{
            tareas: tareas,
            eliminarTareas: eliminarTareas,
            crearTareas: crearTareas
        }}>
            {props.children}
        </tareaContexto.Provider>
    )
}
