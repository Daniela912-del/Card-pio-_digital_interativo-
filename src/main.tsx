import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Importando o visual do Bootstrap para o projeto inteiro usar
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)