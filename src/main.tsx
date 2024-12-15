import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter, HashRouter} from "react-router-dom"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter basename='/tondo-home-assign'>
        {/* <BrowserRouter basename='/tondo-home-assign'> */}
            <App/>
        {/* </BrowserRouter> */}
        </HashRouter>
    </StrictMode>,
)
