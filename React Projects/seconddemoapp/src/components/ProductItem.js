import React, {useState} from "react";
import ProductDate from "./ProductDate";
import Card from "./Card";
import './ProductItem.css';

const ProductItem = (props) => {
    
    const [title, setTitle] = useState(props.title)

    function clickHandler(){
        setTitle("Added to Cart");
        console.log('button clicked');
    }  

    return(
        <Card className="product-item">
            <ProductDate date={props.manufacturedate}/>
            <div className="product-item-description">
                <h2>{title}</h2>
            </div>
            <button onClick={clickHandler}>Add to cart</button>
        </Card>
    );
}

export default ProductItem;