import { useState } from 'react';
import { getAllProducts} from '../../services/product';
import Searcher from '../../components/Searcher/Searcher';
import Filter from '../../components/Filter/Filter';
import './style.scss';

const Home = () => {
    const [filters, setFilters] = useState([]);

    const handleOnSubmit = async (value) => {
        try {
            const products = await getAllProducts(value);
            setFilters(products.data.filters);
        } catch (error) {
            return
        }
    };
    
    return (
        <div>
            <Searcher handleOnSubmit={handleOnSubmit}/>
            <Filter filters={filters}/>
        </div>
    )
};

export default Home;

