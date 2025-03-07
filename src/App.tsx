import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Books from './pages/Books';
import Miembros from './pages/Miembros';
import { ROUTES } from './lib/constants/routes';
import Users from './pages/Usuarios';
import Logout from './pages/Logout';
import MyOrders  from './pages/MisPedidos';

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.home.path} element={<Home/>} />
        <Route path={ROUTES.login.path} element={<Login/>} />
        <Route path={ROUTES.signup.path} element={<SignUp/>} />
        <Route path={ROUTES.books.path} element={<Books/>} />
        <Route path={ROUTES.logout.path} element={<Logout/>} />
        <Route path={ROUTES.usuarios.path} element={<Users/>} />
        <Route path={ROUTES.miembros.path} element={<Miembros/>} />
        <Route path={ROUTES.MisPedidos.path} element={<MyOrders/>} />
      </Routes>
    </>
  )
}

export default App
