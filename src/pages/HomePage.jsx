import { LikeIcon, PlusIcon, SearchIcon } from "../components/Icons/Icons"
import productImg from "../assets/product.png"
import Slider from "../components/Slider/Slider"

const HomePage = () => {
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

                        <input type="text" placeholder="Поиск..." />
                    </div>
                </header>

                <div className="products">
                    <div className="product">
                        <div className="product__action">
                            <LikeIcon />
                        </div>

                        <img src={productImg} alt="" />

                        <h3>Мужские Кроссовки Nike Blazer Mid Suede</h3>

                        <div className="product__footer">
                            <div className="price">
                                <span className="gray">Цена:</span>
                                <span className="value">12 999 руб.</span>
                            </div>

                            <button>
                                <PlusIcon size={14}/>
                            </button>
                        </div>
                    </div>

                    <div className="product">
                        <div className="product__action">
                            <LikeIcon />
                        </div>

                        <img src={productImg} alt="" />

                        <h3>Мужские Кроссовки Nike Blazer Mid Suede</h3>

                        <div className="product__footer">
                            <div className="price">
                                <span className="gray">Цена:</span>
                                <span className="value">12 999 руб.</span>
                            </div>

                            <button>
                                <PlusIcon size={14}/>
                            </button>
                        </div>
                    </div>

                    <div className="product">
                        <div className="product__action">
                            <LikeIcon />
                        </div>

                        <img src={productImg} alt="" />

                        <h3>Мужские Кроссовки Nike Blazer Mid Suede</h3>

                        <div className="product__footer">
                            <div className="price">
                                <span className="gray">Цена:</span>
                                <span className="value">12 999 руб.</span>
                            </div>

                            <button>
                                <PlusIcon size={14}/>
                            </button>
                        </div>
                    </div>

                    <div className="product">
                        <div className="product__action">
                            <LikeIcon />
                        </div>

                        <img src={productImg} alt="" />

                        <h3>Мужские Кроссовки Nike Blazer Mid Suede</h3>

                        <div className="product__footer">
                            <div className="price">
                                <span className="gray">Цена:</span>
                                <span className="value">12 999 руб.</span>
                            </div>

                            <button>
                                <PlusIcon size={14}/>
                            </button>
                        </div>
                    </div>

                    <div className="product">
                        <div className="product__action">
                            <LikeIcon />
                        </div>

                        <img src={productImg} alt="" />

                        <h3>Мужские Кроссовки Nike Blazer Mid Suede</h3>

                        <div className="product__footer">
                            <div className="price">
                                <span className="gray">Цена:</span>
                                <span className="value">12 999 руб.</span>
                            </div>

                            <button>
                                <PlusIcon size={14}/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage