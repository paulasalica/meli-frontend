import { useState } from 'react';
import { getAllProducts} from '../../services/product';
import Searcher from '../../components/Searcher/Searcher';
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
    
    return (
        <div>
            <Searcher handleOnSubmit={handleOnSubmit} />
            <Filter filters={filters}/>
        </div>
    )
};

export default Home;

