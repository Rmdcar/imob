import { createBrowserRouter } from "react-router-dom"
import Home from './pages/home/Home'
import Contato from "./pages/contato/Contato"
import Cadastro from "./pages/cadastro/Cadastro"
import Erro from "./pages/erro/Erro"
import Login from "./pages/login/Login"
import Dashboard from "./pages/dashboard/Dashboard"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/contato",
    element: <Contato/>
  },
  {
    path: "/cadastro",
    element: <Cadastro/>
  }, 
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "/*",
    element: <Erro/>
  }
])

export default router;