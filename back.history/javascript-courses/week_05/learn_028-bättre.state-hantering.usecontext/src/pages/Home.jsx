import React, { Link } from 'react'

const Home = () => {
  return (
    <div id="home">
        <section className="featured-products">
            <div className="headline">
                <h1>Aktuella kampanjer</h1>
                <Link to="/products/featured">Visa alla</Link>
            </div>
            
        </section>
    </div>
  )
}

export default Home