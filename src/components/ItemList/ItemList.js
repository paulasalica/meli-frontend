import { useParams } from 'react-router-dom';
import { Item } from '../Item/Item';
import './style.scss';

const ItemList = ({
    items,
    loading
}) => {
    console.log(useParams())
    console.log('itemlist');

    return (
    <div className="items">
        {
            loading ? <h2>Loading...</h2> : (
                items.map( (item) => { 
                    return <Item key={item.id} item={item} />
                })
            )
       }
    </div>
    )
}

export default ItemList;