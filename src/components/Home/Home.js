import { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { getAllProducts}  from '../../services/product';
import { Searcher } from '../Searcher/Searcher';
import ItemList from '../ItemList/ItemList';
import ItemDetail from '../ItemDetail/ItemDetail';
import './style.scss';

const Home = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [itemDetails, setitemDetails] = useState(false);

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
        <Router>
            <Searcher handleOnSubmit={handleOnSubmit} loading={loading} searchValue={searchValue}/>
            <Switch>
                <Route path="/" exact>
                    <ItemList items={searchResults} searchValue={searchValue}/> 
                </Route>
                <Route path="/item/:id" component={ItemDetail}>
                </Route>
            </Switch>
        </Router>
        
    )
};

export default Home;

