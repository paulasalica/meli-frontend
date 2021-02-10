import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Searcher = ({
    handleOnSubmit
}) => {
    const [searchKey, setSearchKey] = useState();

    const handleOnChange = e => setSearchKey(e.target.value);

    const handleOnClick = () => {
        if (!searchKey) return;
        handleOnSubmit(searchKey);
    }

    return (
        <header>
            <div className="searcher">
                <input className="logo" />
                <input type="text" placeholder="Nunca dejes de buscar" value={searchKey} onChange={handleOnChange}/>
                
                    <input type="button" onClick={handleOnClick} /> 
                
            </div>
        </header>
    )
}

export default Searcher;