import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useParams, useLocation  } from "react-router-dom";
import { getAllProducts} from '../../services/product';
import Searcher from '../../components/Searcher/Searcher';
import ItemList from '../ItemList/ItemList';
import ItemDetail from '../ItemDetail/ItemDetail';
import Filter from '../../components/Filter/Filter';
import './style.scss';

const Home = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState([]);

    const handleOnSubmit = async (value) => {
        setLoading(true);
        try {
            const products = await getAllProducts(value);
            setSearchResults(products.data.items);
            setFilters(products.data.filters);
        } catch (error) {
            return
        } finally {
            setLoading(false);
        }
    };
    console.log(searchResults)
    
    return (
        <div>
            <Searcher handleOnSubmit={handleOnSubmit} loading={loading}/>
            <Filter filters={filters}/>
        </div>
    )
};

export default Home;

