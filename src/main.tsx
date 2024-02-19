import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {App} from "./app.tsx";

/**
 * Quando falamos de React estamos falando de componentes, esse method render
 * nada mais é do que mostrar em tela, ele pega nossa div com ID 'root' e
 * dentro dela ele cria nossa aplicação.
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
