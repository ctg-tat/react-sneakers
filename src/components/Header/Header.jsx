import { NavLink } from "react-router-dom";
import { CartIcon, LikeIcon, OrderIcon } from "../Icons/Icons";
import Logo from "./Logo/Logo";

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
            <NavLink to="/">
                <Logo />
            </NavLink>

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