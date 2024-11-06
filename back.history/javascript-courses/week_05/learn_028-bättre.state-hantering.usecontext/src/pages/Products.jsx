import React, { useContext } from 'react'
import { useParams } from "react-router-dom"
import ProductItem from '../components/products/ProductItem'
import { ProductContext } from '../context/ProductContext'

const Products = () => {
    const { tag } = useParams()
    const { products } = useContext(ProductContext)

    const filteredProducts = products.filter(product => product.tags && product.tags.includes(tag))

  return (
    <section>
        <h1>Produkter - {tag}</h1>
        <div className="products">
            {filteredProducts.map(product => (
                <ProductItem key={product.articleNumber} item={product} />
            ))}
        </div>
    </section>
  )
}

export default Products