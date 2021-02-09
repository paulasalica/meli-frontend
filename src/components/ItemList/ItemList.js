import { Item } from '../Item/Item';
import './style.scss';

const ItemList = ({
    items,
    selectItem
}) => {
    const handleOnClick = (id) => {
        selectItem(id);
    }
    return (
    <div className="items">
        {items.map( (item) => { 
            return <Item key={item.id} item={item} handleOnClick={handleOnClick}/>
        })}
    </div>
    )
}

export default ItemList;