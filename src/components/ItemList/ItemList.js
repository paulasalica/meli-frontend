import { Item } from '../Item/Item';
import './style.scss';

export const ItemList = ({items}) => {
    return (
    <div className="items">
        {items.map( (item) => { 
            return <Item key={item.id} item={item}/>
        })}
    </div>
    )
}