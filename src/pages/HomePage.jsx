import { useState } from "react"
import { SearchIcon } from "../components/Icons/Icons"
import Product from "../components/Product/Product"
import Slider from "../components/Slider/Slider"
import PRODUCTS from "../Data/PRODUCTS"

const HomePage = () => {

    const [products, setProducts] = useState(PRODUCTS);
    const [query, setQuery] = useState("");

    const filteredProducts = products.filter((item) => item.name.toLocaleLowerCase().includes(query));

    const onChangeQuery = (event) => setQuery(event.target.value.toLocaleLowerCase());

    return(
        <>
            <Slider />

            <section className="section catalog">
                <header className="section-header">
                    <h2 className="section-title">
                        Все кроссовки 
                    </h2>

                    <div className="search-box">
                        <SearchIcon size="22"/>

                        <input value={query} onChange={(e) => onChangeQuery(e)} type="text" placeholder="Поиск..." />
                    </div>
                </header>

                <div className="products">
                    {
                        filteredProducts.length ? (filteredProducts.map((product) => {
                            return <Product key={product.id} product={product}/>;
                        })) : <h2 className="empty">По вашему запросу "{query}" ничего не найдено!</h2>
                    }
                </div>
            </section>
        </>
    )
}

export default HomePage