import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Components/Core/App'

const doc = document.getElementById('root') as HTMLElement
const root = createRoot(doc)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
