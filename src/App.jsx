import Navbar from "./components/Navbar"
import { Routes , Route} from "react-router"
import Home from "./pages/home"
import Cart from "./pages/cart"
function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route exact path="/cart"  element={<Cart/>}/>

        
      </Routes>
    </>
  )
}

export default App
