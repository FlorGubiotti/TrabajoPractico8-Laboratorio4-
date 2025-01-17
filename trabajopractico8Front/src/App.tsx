import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import Navbar from "./components/navbar/Navbar"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App