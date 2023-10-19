import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/index.jsx'
import './index.css'

import { TodoContext, TodoProvider } from './components/TodoContext/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
)



