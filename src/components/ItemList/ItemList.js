import { Item } from '../Item/Item';
import './style.scss';

const ItemList = ({items}) => {
    return (
    <div className="items">
        {items.map( (item) => { 
            return <Item key={item.id} item={item}/>
        })}
    </div>
    )
}

export default ItemList;