import './style.scss';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    const {id, title, price, picture, free_shipping, city_name} = item;

    return (
        <div className="item">
                <div className="item_container">
                    <Link to={`/items/${id}`} >
                        <div className="item_img">
                            <img src={picture} />
                        </div>
                    </Link>
                    <div className="item_info">
                        <div className="price_container">
                            <p className="price">$ {price.mount}</p>
                            {free_shipping ? (
                                <input className="free_shipping_logo" />
                            ) : ''}
                        </div>
                        <p className="title">{title}</p>
                    </div>
                    <div className="city">
                        <p className="city_name">{city_name}</p>
                    </div>
                </div>
        </div>   
    )
}

export default Item;