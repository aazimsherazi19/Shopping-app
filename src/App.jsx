import Navbar from "./components/Navbar"
import { Routes , Route} from "react-router"
import Home from "./pages/home"
import Cart from "./pages/cart"
function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/Shopping-app/"  element={<Home/>}/>
        <Route  path="/Shopping-app/cart"  element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
