import './style.scss';

export const Item = ({item}) => {
    const {title, price, picture, free_shipping} = item;
    console.log(title)
    return (
        <div className="item">
            <div className="item_img">
                <img src={picture} />
            </div>
            <div className="item_info">
                <div className="price_container">
                    <p className="price">$ {price.mount}</p>
                    {free_shipping==true ? (
                        <img src="./icshipping2.png"  crossorigin="anonymous"/>
                    ) : ''}
                </div>
                <p className="title">{title}</p>
                <p className=""></p>
            </div>
        </div>
    )
}