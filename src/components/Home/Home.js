import { useState } from 'react';
import {Link, Router, Route, Switch} from 'react-router-dom';
import { getAllProducts}  from '../../services/product';
import { Searcher } from '../Searcher/Searcher';
import ItemList from '../ItemList/ItemList';
import ItemDetail from '../ItemDetail/ItemDetail';
import './style.scss';

const Home = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    var searchValue;
    const handleOnSubmit = async (value) => {
        searchValue = value;
        setLoading(true);
        try {
            const products = await getAllProducts(value);
            setSearchResults(products.data.items);
            console.log(products.data.items);
        } catch (error) {
            return
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <Searcher handleOnSubmit={handleOnSubmit} loading={loading} searchValue={searchValue}/>
            <div>
                <ItemList items={searchResults}/> 
            </div>
        </div>
        
    )
};

export default Home;

