import { NavLink } from "react-router-dom";
import { CartIcon, LikeIcon, OrderIcon } from "../Icons/Icons";
import logo from "../../assets/logo.png"

const CartButton = () => {
    return(
        <button>
            <CartIcon size={24}/> <span>1205 руб.</span>
        </button>
    )
}

const Header = () => {
    return(
        <header className="header">
            <div className="logo">
                <img src={logo} alt="React Sneakers" width={40} height={40}/>

                <div>
                    <h1>React Sneakers</h1>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>

            <nav>
                <CartButton />

                <NavLink to="/favorites">
                    <LikeIcon size={24} />
                </NavLink>

                <NavLink to="/orders">
                    <OrderIcon size={24} />
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;