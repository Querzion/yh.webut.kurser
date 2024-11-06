import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Products from "./pages/Products"
import './App.css'
import ProductProvider from "./context/ProductContext"


function App() {

    return (
        <ProductProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products/:tag" element={<Products />} />
                </Routes>
            </BrowserRouter> 
        </ProductProvider>
    )
}

export default App
