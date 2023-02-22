import {useState, useContext} from 'react'
import {tareaContexto} from '../contexto/ContexTareas'

function Formulario() {

    const [titulo, settitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const {crearTareas} = useContext(tareaContexto)


    const subMiit = (ev) => {
        ev.preventDefault()
        crearTareas({
            titulo,
            descripcion
        })
        setDescripcion('')
        settitulo('')
    }
    return (
        <div  className='max-w-md mx-auto'>
            <form onSubmit={subMiit} className = 'bg-slate-800 p-10 mb-4 '>
                <h1 className='text-white p-2 text-2xl font-bold mb-3'>Asignar tareas</h1>
                <input className='bg-slate-300 p-3 w-full mb-2' placeholder='escribe la tarea' onChange={(e) => settitulo(e.target.value)} value={titulo} autoFocus/>
                <textarea className='bg-slate-300 p-3 w-full mb-2' placeholder='escribe la descripcion de la tarea' onChange={(e) => setDescripcion(e.target.value)} value={descripcion}></textarea>
                <button className='bg-blue-400 text-white p-2 rounded-md'>Guardar</button>
            </form>
        </div>
    )
}

export default Formulario