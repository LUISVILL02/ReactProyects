import {useContext} from 'react'
import {tareaContexto} from '../contexto/ContexTareas'

function CartaTareas({tarea}) {

    const {eliminarTareas} = useContext(tareaContexto)

    return (
        <div className='bg-gray-700 text-white p-3 m-2 rounded-md'>
            <h1 className='text-xl font-bold capitalize'>{tarea.titulo}</h1>
            <p className='text-gray-400 '>{tarea.descripcion}</p>
            <button className='bg-red-500 rounded-md p-1 px-6 mt-4 hover:bg-red-400' onClick={() => eliminarTareas(tarea.id)}>eliminar</button>
        </div>
    )
}
export default CartaTareas
