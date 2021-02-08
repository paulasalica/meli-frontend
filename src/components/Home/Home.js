import {useState} from 'react';
import {getAllProducts} from '../../services/product';
import {Searcher} from '../Searcher/Searcher';
import {ItemList} from '../ItemList/ItemList';
import './style.scss';

export const Home = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleOnSubmit = async (value) => {
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
        <div>
            <Searcher handleOnSubmit={handleOnSubmit} loading={loading}/>
            <ItemList items={searchResults}/>
        </div>
    )
};

