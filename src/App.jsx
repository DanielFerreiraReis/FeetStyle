// import TelaDeVendas from "./pages/private/TelaDeVendas";
// function App() {
//   return <TelaDeVendas />;
// }

// export default App;

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import AdminRoutes from './routes/AdminRoutes';
import VendedorRoutes from './routes/VendedorRoutes';
import Login from './pages/public/Login';
import './index.css'


function App() {
  const { isAuthenticated, userRole } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas */}
        <Route index element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path="/unauthorized" element={<h1>Acesso não autorizado</h1>} />

        {/* Redirecionamento padrão para login se não autenticado */}
        <Route
          path="*"
          element={
            isAuthenticated ? (
              userRole === "admin" ? (
                <Navigate to="/dashboard" />
              ) : (
                <Navigate to="/cadastro" />
              )
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>

      {/* Rotas privadas por papel */}
      {isAuthenticated && userRole === "admin" && <AdminRoutes />}
      {isAuthenticated && userRole === "vendedor" && <VendedorRoutes />}
    </BrowserRouter>
  );
}

export default App;
