import { NavLink } from "react-router-dom"
import { LikeIcon, NextArrowIcon, PlusIcon, PrevArrowIcon, SearchIcon } from "../components/Icons/Icons"

import banner from "../assets/banner.png"
import productImg from "../assets/product.png"

const HomePage = () => {
    return(
        <>
            <section className="slider">
                <div className="wrapper">
                    <div className="slides">    
                        <div className="slide" style={{
                            backgroundColor: "#F4EFE9"
                        }}>
                            <div className="slide__left">
                                <h2>Stan Smith,
                                Forever!</h2>
                                <NavLink to="/" className="button xl">
                                    Купить
                                </NavLink>
                            </div>

                            <div className="slide__right">
                                <img src={banner} alt="Stan Smith" />
                            </div>
                        </div>
                    </div>  

                    <div className="control">
                        <button className="prev">
                            <PrevArrowIcon />
                        </button>
                        <button className="next">
                            <NextArrowIcon />
                        </button>
                    </div>
                </div>
            </section>

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
                </div>
            </section>
        </>
    )
}

export default HomePage