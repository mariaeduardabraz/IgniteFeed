import React from 'react' // pacote responsável pelo core - funcionalidades compartilhadas entre as interfaces
import ReactDOM from 'react-dom/client' // integração do react com a DOM (document object module) - representação do html através do js
import { App } from './App.jsx' //

ReactDOM.createRoot(document.getElementById('root')).render( // indica que o react vai criar a aplicação dentro do root - que está no html
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) // o render mostra em tela o app - função que retorna um html - jogando ele dentro do root - que está no html
