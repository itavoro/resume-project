import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Title from './Title.jsx'
import Introduction from './Introduction.jsx'
import Navigation from './Navigation.jsx'
import Demo from './Demo.jsx'
export const regularBackground = "bg-gradient-to-l from-purple-800 to-purple-500"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation />
    <div id="first-page-container" className="flex h-screen">
      <div className="flex flex-col ml-10">
        <Title />
        <Introduction />
      </div>
      <Demo />
    </div>
  </StrictMode>,
)