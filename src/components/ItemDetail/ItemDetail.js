import './style.scss';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../services/product";

const ItemDetail = ({}) => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);

    const {condition, sold_quantity, title, description, picture, price } = searchResults;
    let { id } = useParams();
    
    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const producDetails = await getProductDetails(id);
                setSearchResults(producDetails.data.item);
            } catch (error) {
                return
            } finally {
                setLoading(false);
            }
        } ;
        fetchData();
    }, []);

    return (
        <div>
        {
            loading ? <h1>Loading...</h1> : (
                <div className="item_detail">
                    <div className="item_info">
                        <div className="item_picture">
                            <img src={picture}/>
                        </div>
                        <div className="lateral_info">
                            <p className="condition_soldquantity">{condition} - {sold_quantity} vendidos</p>
                            <p className="title_item">{title}</p>
                            <p className="price">$ {price.amount} </p>
                            <button>Comprar</button>
                        </div>
                    </div>
                    <div className="item_description">
                        <p className="title">Descripción del producto</p>
                        <p className="description">{description}</p>
                    </div>
                </div>
            )
        }
        </div>
        
    )
}

export default ItemDetail;