import React from "react";
import ProductItem from "./ProductItem";
import Card from "./Card";
import './Product.css';

const Products = (props) => {
    return (
        <Card className="products">
            <ProductItem 
                title={props.items[0].title}
                amount={props.items[0].cost}
                manufacturedate={props.items[0].mfgdate}
            />
            <ProductItem 
                title={props.items[1].title}
                amount={props.items[1].cost}
                manufacturedate={props.items[1].mfgdate}
            />
            <ProductItem 
                title={props.items[2].title}
                amount={props.items[2].cost}
                manufacturedate={props.items[2].mfgdate}
            />
            <ProductItem 
                title={props.items[3].title}
                amount={props.items[3].cost}
                manufacturedate={props.items[3].mfgdate}
            />
        </Card>
    );
}

export default Products;