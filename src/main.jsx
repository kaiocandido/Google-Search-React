import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './assets/Containers/Home'
import GlobalStyles from './assets/GlobalStyles/GlobalStlyles'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <Home/>
  </StrictMode>,
)
