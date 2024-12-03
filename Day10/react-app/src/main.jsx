import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Marks from './Marks.jsx'
import DisplayMarks from './DisplayMarks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DisplayMarks/>
    <App />
    <Marks name={'Abhishek'} roll={2200320130014} m1={87} m2={98} m3={87}/>
    <Marks name={'Aditya'} roll={2200320130020} m1={97} m2={88} m3={77}/>
  </StrictMode>,
)
