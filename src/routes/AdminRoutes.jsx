import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import OptionsDashboard from '../pages/private/OptionsDashboard'

const AdminRoutes = () => (
  <Routes>
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute role="admin">
          <OptionsDashboard />
        </ProtectedRoute>
      }
    />
    {/* <Route
      path="/relatorio"
      element={
        <ProtectedRoute role="admin">
          <Relatorio />
        </ProtectedRoute>
      }
    /> */}
  </Routes>
);

export default AdminRoutes;