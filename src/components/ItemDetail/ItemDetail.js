import './style.scss';

const ItemDetail = ({item}) => {
    const {condition, sold_quantity, title, description, picture, price} = item;
    return (
        <div className="item_detail">
            <div className="item_info">
                <div className="item_picture">
                    <img src={picture}/>
                </div>
                <div className="lateral_info">
                    <p className="condition_soldquantity">{condition} - {sold_quantity} vendidos</p>
                    <p className="title_item">{title}</p>
                    <p className="price">$ {price.amount}</p>
                    <button>Comprar</button>
                </div>
            </div>
            <div className="item_description">
                <p className="title">Descripción del producto</p>
                <p className="description">{description}</p>
            </div>
        </div>
        
    )
}

export default ItemDetail;