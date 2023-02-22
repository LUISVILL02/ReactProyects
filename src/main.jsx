import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ContexTareasProvider } from './contexto/ContexTareas';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContexTareasProvider>
      <App />
    </ContexTareasProvider>
  </React.StrictMode>,
)
