import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Title from './Title.jsx'
import Introduction from './Introduction.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id="first-page-container" className="flex flex-col h-screen items-start">
      <Title />
      <Introduction />
    </div>
  </StrictMode>,
)
