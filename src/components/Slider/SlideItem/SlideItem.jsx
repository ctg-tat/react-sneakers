import { NavLink } from "react-router-dom";

const SlideItem = ({item}) => {
    return(
        <div className="slide" style={{
            backgroundColor: item.background
        }}>
            <div className="slide__left">
                <h2>{item.text}</h2>
                <NavLink to={item.button.url} className="button xl">
                    {item.button.text}
                </NavLink>
            </div>

            <div className="slide__right">
                <img src={item.url} alt={item.text} height={300} style={{
                    maxHeight: 300,
                    minHeight: 300
                }} />
            </div>
        </div>
    )
}

export default SlideItem;