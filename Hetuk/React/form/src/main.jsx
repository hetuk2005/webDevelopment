import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Context_Provider>
    <App />
  </Context_Provider>,
)
