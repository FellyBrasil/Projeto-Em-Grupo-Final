import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Login from "./routes/Login";
import Cadastro from "./routes/Cadastro";
import Resultado from "./routes/Resultado";
import Painel from "./routes/Painel";
import PainelCandidatos from "./routes/PainelCandidatos";
import PainelZonas from "./routes/PainelZonas";
import PainelPolos from "./routes/PainelPolos";
import EditarCandidatos from "./routes/EditarCandidatos";
import AdicionarZonas from "./routes/AdicionarZonas";
import EditarZonas from "./routes/EditarZonas";
import AdicionarPolos from "./routes/AdicionarPolos";
import EditarPolos from "./routes/EditarPolos";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      // {
      //   path: "/",
      //   element: <Home />,
      // },
      {
        path: "/login/",
        element: <Login />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
      {
        path: "/resultado/",
        element: <Resultado />,
      },
      {
        path: "/paineis/",
        element: <Painel />,
      },
      {
        path: "/paineis/candidatos/",
        element: <PainelCandidatos />,
      },
      {
        path: "/paineis/zonas/",
        element: <PainelZonas />,
      },
      {
        path: "/paineis/polos/",
        element: <PainelPolos />,
      },
      {
        path: "/paineis/candidatos/editar",
        element: <EditarCandidatos />,
      },
      {
        path: "/paineis/zonas/adicionar",
        element: <AdicionarZonas />,
      },
      {
        path: "/paineis/zonas/editar",
        element: <EditarZonas />,
      },
      {
        path: "/paineis/polos/adicionar",
        element: <AdicionarPolos />,
      },
      {
        path: "/paineis/polos/editar",
        element: <EditarPolos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
