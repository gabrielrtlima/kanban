import ReactDOM from 'react-dom/client'
import Home from './pages/Home/index.tsx'
import './styles/reset.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from './pages/Register/index.tsx'
import { Login } from './pages/Login/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/kanban" element={<Home />} />
            <Route path="/" element={<Login />} />
        </Routes>
    </BrowserRouter>
    
)
