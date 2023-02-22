import CartaTareas from './CartaTareas'
import {useContext} from 'react'
import {tareaContexto} from '../contexto/ContexTareas'

function Listtareas() {
    const { tareas} = useContext(tareaContexto)


    if(tareas.length === 0){
        return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas</h1>
    }

    return (
    <div className="grid grid-cols-2 gap-4">
        {tareas.map((tarea)=>(
            <CartaTareas key={tarea.id} tarea = {tarea}/>
        ))}
    </div>
    )
}
export default Listtareas