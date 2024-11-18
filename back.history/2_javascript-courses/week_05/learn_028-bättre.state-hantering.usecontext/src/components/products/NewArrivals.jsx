import React, { useContext } from 'react'
import ProductItem from './ProductItem'
import { ProductContext } from '../../context/ProductContext'

const NewArrivals = () => {
    const { products } = useContext(ProductContext)
    const filteredProducts = products.filter(product => product.tags && product.tags.includes("new"))
    
    return (
        <div className="products">
            {
                filteredProducts.slice(0, 4).map(product => (<ProductItem key={product.articleNumber} item={product} />))
            }
        </div>
    )
}

export default NewArrivals