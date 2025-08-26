import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from "react-router-dom"
import Container from "./components/Container"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import About from "./pages/About"
import Error from "./Error"
import Shop from "./pages/Shop"
import Journal from "./pages/Journal"
import Contact from "./pages/Contact"
import ProductDetail from "./pages/ProductDetail"

function App() {
   let router = createBrowserRouter(createRoutesFromChildren(
   <Route>
    <Route element={<Layout />}>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/shop" element={<Shop />}></Route>
    <Route path="/products/:id" element={<ProductDetail />}></Route>
    <Route path="/journal" element={<Journal />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
   </Route>
     <Route path="*" element={<Error />}></Route>
   </Route>
   ))
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    
    </>
  )
}

export default App
