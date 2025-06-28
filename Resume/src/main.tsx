import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Portfolio from './Resume/Resume'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Portfolio/>
  </StrictMode>,
)
