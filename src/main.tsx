import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login_Screen from './screens/login_screen'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login_Screen />
  </StrictMode>,
)
