import Listtareas from './componentes/Listtareas'
import Formulario from './componentes/Formulario'

function App(){
  return (
      <main className='bg-zinc-800 h-screen'>
        <div className='container mx-auto' p-10>
          <Formulario/>
          <Listtareas/>
        </div>
      </main>
  )
}

export default App