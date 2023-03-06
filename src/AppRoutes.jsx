import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from "./routes/Home";
import Login from "./routes/Login";
import Cadastro from "./routes/Cadastro";
import Resultado from "./routes/Resultado";
import Painel from "./routes/Painel";
import PainelCandidatos from "./routes/PainelCandidatos";
import PainelZonas from "./routes/PainelZonas";
import PainelPolos from "./routes/PainelPolos";
import PainelResultados from "./routes/PainelResultados";
import EditarCandidatos from "./routes/EditarCandidatos";
import AdicionarZonas from "./routes/AdicionarZonas";
import EditarZonas from "./routes/EditarZonas";
import AdicionarPolos from "./routes/AdicionarPolos";
import EditarPolos from "./routes/EditarPolos";
import AdicionarResultados from "./routes/AdicionarResultados";
import EditarResultados from "./routes/EditarResultados";

import { AuthProvider, AuthContext } from "./contexts/auth";

const Private = ({ children }) => {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            exact
            path="/login"
            element={<Login />}
          />
          <Route
            exact
            path="/cadastro"
            element={<Cadastro />}
          />
          <Route
            exact
            path="/resultado"
            element={<Resultado />}
          />
          <Route
            exact
            path="/painel"
            element={
              
                <Painel />
              
            }
          />
          <Route
            exact
            path="/painel/candidatos"
            element={
              
                <PainelCandidatos />
              
            }
          />
          <Route
            exact
            path="/painel/zonas"
            element={
              
                <PainelZonas />
              
            }
          />
          <Route
            exact
            path="/painel/polos"
            element={
              
                <PainelPolos />
              
            }
          />
          <Route
            exact
            path="/painel/resultados"
            element={
              
                <PainelResultados />
              
            }
          />
          <Route
            exact
            path="/painel/candidatos/editar"
            element={
              
                <EditarCandidatos />
              
            }
          />
          <Route
            exact
            path="/painel/zonas/adicionar"
            element={
              
                <AdicionarZonas />
              
            }
          />
          <Route
            exact
            path="/painel/zonas/editar"
            element={
              
                <EditarZonas />
              
            }
          />
          <Route
            exact
            path="/painel/polos/adicionar"
            element={
              
                <AdicionarPolos />
              
            }
          />
          <Route
            exact
            path="/painel/polos/editar"
            element={
              
                <EditarPolos />
              
            }
          />
          <Route
            exact
            path="/painel/resultados/adicionar"
            element={
              
                <AdicionarResultados />
              
            }
          />
          <Route
            exact
            path="/painel/resultados/editar"
            element={
              
                <EditarResultados />
              
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
