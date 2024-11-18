import React, { Link } from 'react'
import Featured from '../components/products/Featured'
import NewArrivals from '../components/products/NewArrivals'
import Top from '../components/products/Top'

const Home = () => {
    return (
        <div id="home">
            
            <section className="featured-products">
                
                <div className="headline">
                    <h1>Aktuella kampanjer</h1>
                    <Link to="/products/featured">Visa alla</Link>
                </div>

                <Featured />
            
            </section>

            <section className="new-products">
                
                <div className="headline">
                    <h1>Nytt hos oss</h1>
                    <Link to="/products/new">Visa alla</Link>
                </div>

                <NewArrivals />

            </section>

            <section className="top-products">

                <div className="headline">
                    <h1>Populärt just nu</h1>
                    <Link to="/products/top"></Link>
                </div>

                <Top />

            </section>

        </div>
    )
}

export default Home