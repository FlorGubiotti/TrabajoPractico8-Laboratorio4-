import { Route, Routes } from "react-router-dom"
// import Instrumentos from "../components/instrumentos/Instrumentos"
// import DetalleInstrumentos from "../components/detalleInstrumentos/DetalleInstrumentos"
import Home from "../components/home/Home"
// import DondeEstamos from "../components/dondeEstamos/DondeEstamos"
// import GrillaInstrumentos from "../components/grillaInstrumentos/GrillaInstrumentos"
// import Formulario from "../components/formulario/Formulario"
import { Suspense, lazy } from "react"
import LoaderPage from "../components/LoaderPage/LoaderPage";
import { RutaPrivada } from "../controlAcceso/RutaPrivada";
import Login from "../components/Login/Login";
import RolUsuario from "../controlAcceso/RolUsuario";
import { Roles } from "../entities/Roles";

const AppRoutes = () => {

  const DondeEstamos = lazy(() => import('../components/dondeEstamos/DondeEstamos'));
  const GrillaInstrumentos = lazy(() => import('../components/grillaInstrumentos/GrillaInstrumentos'));
  const Formulario = lazy(() => import('../components/formulario/Formulario'));
  const Instrumentos = lazy(() => import('../components/instrumentos/Instrumentos'));
  const DetalleInstrumentos = lazy(() => import('../components/detalleInstrumentos/DetalleInstrumentos'));


  return (
    <Suspense fallback={<LoaderPage></LoaderPage>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={
          <RutaPrivada>
            <Instrumentos />
          </RutaPrivada>
        } />
        <Route path="/products/detalle/:id" element={<DetalleInstrumentos />} />
        <Route path="/DondeEstamos" element={<DondeEstamos />} />
        <Route path="/grilla" element={
          <RutaPrivada>
            <GrillaInstrumentos />
          </RutaPrivada>
          
          } />
          <Route element={<RolUsuario rol={Roles.ADMIN}/>}>
            <Route path="/formulario/:id" element={<Formulario />} /> 
          </Route>
      </Routes>
    </Suspense>

  )
}

export default AppRoutes