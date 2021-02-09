import { Item } from '../Item/Item';
import './style.scss';

const ItemList = ({
    items,
    selectItem
}) => {
    return (
    <div className="items">
        {items.map( (item) => { 
            return <Item key={item.id} item={item} selectItem={selectItem}/>
        })}
    </div>
    )
}

export default ItemList;