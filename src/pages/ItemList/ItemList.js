import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllProducts } from '../../services/product';
import { CircularProgress } from '@material-ui/core';
import Searcher from '../../components/Searcher/Searcher';
import Filter from '../../components/Filter/Filter';
import Item from '../../components/Item/Item';
import './style.scss';

const ItemList = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState([]);
    let search = useLocation().search.split('=')[1];

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const products = await getAllProducts(search);
                setSearchResults(products.data.items);
                setFilters(products.data.filters);
            } catch (error) {
                return
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [search]);

    const handleOnSubmit = async (value) => {
        search = value;
    };

    return (
        <div>
            <Searcher handleOnSubmit={handleOnSubmit} />
            <Filter filters={filters}/>
            <div className="item-list">
                {
                    loading ? <div><CircularProgress size={25} color="secondary"/></div> 
                    : (
                        searchResults.map( (item) => { 
                            return <Item key={item.id} item={item} />
                        })
                    )
                }
            </div>
        </div>
    )
}

export default ItemList;