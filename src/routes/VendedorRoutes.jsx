import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
// import Cadastro from '../assets/componentesSelect/Cadastro';
// import Movimento from '../componentesSelect/Movimento';
import TelaDeVendas from '../pages/private/telaDeVendas';

const VendedorRoutes = () => (
  <Routes>
    <Route
      path="/TelaDeVendas"
      element={
        <ProtectedRoute role="vendedor">
          <TelaDeVendas/>
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default VendedorRoutes;