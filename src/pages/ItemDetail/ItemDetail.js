import './style.scss';
import { useState, useEffect } from 'react';
import { useLocation  } from "react-router-dom";
import { getAllProducts, getProductDetails } from "../../services/product";
import {CircularProgress} from '@material-ui/core';
import Searcher from '../../components/Searcher/Searcher';
import Filter from '../../components/Filter/Filter';

const ItemDetail = ({}) => {
    const [searchResults, setSearchResults] = useState([]);
    const [filters, setFilters] = useState([]);
    const [loading, setLoading] = useState(true);

    const {condition, sold_quantity, title, description, picture, price } = searchResults;
    let id = useLocation().pathname.split('/')[2];
    let search = '';

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const producDetails = await getProductDetails(id);
                setSearchResults(producDetails.data.item);

                const title = producDetails.data.item.title;
                const products = await getAllProducts(title.split(' ')[0]);
                setFilters(products.data.filters);
            } catch (error) {
                return
            } finally {
                setLoading(false);
            }
        } ;
        fetchData();
    }, [search]);

    const handleOnSubmit = async (value) => {
        search = value;
    };

    return (
        <div>
            <Searcher handleOnSubmit={handleOnSubmit}/> 
            <Filter filters={filters}/>
        {
            loading ? <div><CircularProgress size={25} color="secondary"/></div> 
            : (
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