import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';

import { Login }       from './pages/login';
import Dashboard       from './Dashboards/admin';
import { Clinics }     from './pages/clinics';
import { Specialties } from './pages/specialties';
import { Medicines }   from './pages/medicines';
import { Nurses }      from './pages/nurses';
import { Doctors }     from './pages/doctors';
import { Coupons }     from './pages/coupons';
import { FAQs }        from './pages/FAQs';
import { Products }    from './pages/products';
import { Chat }        from './pages/chat';
import { MainLayout }  from './components/Layout/MainLayout';

function ProtectedRoute({ children }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-600" />
      </div>
    );
  }

  return user ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<Login />} />

        {/* Redirect root */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Protected */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard"   element={<Dashboard />} />
          <Route path="clinics"     element={<Clinics />} />
          <Route path="specialties" element={<Specialties />} />
          <Route path="medicines"   element={<Medicines />} />
          <Route path="nurses"      element={<Nurses />} />
          <Route path="doctors"     element={<Doctors />} />
          <Route path="coupons"     element={<Coupons />} />
          <Route path="faqs"        element={<FAQs />} />
          <Route path="products"    element={<Products />} />
          <Route path="chat"        element={<Chat />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
