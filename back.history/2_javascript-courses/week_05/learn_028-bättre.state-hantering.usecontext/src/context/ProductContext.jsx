import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext()

const ProductProvider = ({children}) => {
    const baseApiUri = `https://localhost:7101/api/products`
    
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState([])

    const getProduct = async (id) => {
        const res = await fetch(baseApiUri + `/${id}`)
        const data = await res.json()

        setProduct(data)
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(baseApiUri)
            const data = await res.json()

            setProducts(data)
        }

        fetchData()
    }, [ ])


    return (
        <ProductContext.Provider value={{ products, product, getProduct }} >
            {children}
        </ProductContext.Provider>
    )

}

export default ProductProvider