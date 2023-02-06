import { LikeIcon, PlusIcon } from "../Icons/Icons.jsx"

const Product = ({ product }) => {
    return(
        <div className="product">
            <div className="product__action">
                <LikeIcon />
            </div>

            <img src={product.preview} alt="" />

            <h3>{product.name}</h3>

            <div className="product__footer">
                <div className="price">
                    <span className="gray">Цена:</span>
                    <span className="value">{product.price} руб.</span>
                </div>

                <button>
                    <PlusIcon size={14}/>
                </button>
            </div>
        </div>
    )
}

export default Product;