import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getAllProducts, getProductDetails } from '../../services/product';
import Searcher from '../Searcher/Searcher';
import ItemList from '../ItemList/ItemList';
import ItemDetail from '../ItemDetail/ItemDetail';
import Filter from '../Filter/Filter';
import './style.scss';

const Home = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [itemIdDetails, setitemIdDetails] = useState([]);
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

    const selectItem = async (value) => {
        setLoading(true);
        try {
            const producDetails = await getProductDetails(value);
            setitemIdDetails(producDetails.data.item);
        } catch (error) {
            return
        } finally {
            setLoading(false);
        }
    } ;

    return (
        <Router>
            <Searcher handleOnSubmit={handleOnSubmit} loading={loading}/>
            <Filter filters={filters}/>
            <Switch>
                {
                    loading ? <h3>Loading...</h3> : (
                        <Route path="/" exact>
                            <ItemList items={searchResults} selectItem={selectItem}/> 
                        </Route>
                    )
                }
                {
                    loading ? <h3>Loading...</h3> : (
                        <Route path="/items/:id" exact>
                            <ItemDetail item={itemIdDetails}/>
                        </Route>
                    )
                }
            </Switch>
        </Router>
    )
};

export default Home;

