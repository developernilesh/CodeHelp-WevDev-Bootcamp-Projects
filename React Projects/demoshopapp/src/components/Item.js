import './Item.css';

function Item(props) {
    const itemName = props.name;
    return(
        <div className='item-container'>
            <p className="myItem">{itemName}</p>
            {props.children}
        </div>
    );
}

export default Item;