import './style.scss';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

export const Item = ({item}) => {
    const {id, title, price, picture, free_shipping} = item;
    const [click, setclick] = useState(false);

    const handleClick = () => setclick(!click);

    return (
        <Link to={`/item/${id}`} onClick={handleClick}>
        <div className="item">
            
                <div className="item_container">
                    <div className="item_img">
                        <img src={picture} />
                    </div>
                    <div className="item_info">
                        <div className="price_container">
                            <p className="price">$ {price.mount}</p>
                            {free_shipping==true ? (
                                <input className="free_shipping_logo" />
                            ) : console.log()}
                        </div>
                        <p className="title">{title}</p>
                        <p className=""></p>
                    </div>
                </div>
            
        </div>
        </Link>

        
    )
}