import React from "react";
import ProductForm from "./ProductForm";
import './NewProduct.css';

const NewProduct = (props) =>{

    function saveProductData(productdata){
        console.log("inside newProduct.js");
        console.log(productdata);
        props.onRendering(productdata);
    }

    return (
        <div className="new-product">
            <ProductForm onSaving={saveProductData} />
        </div>
    );
}

export default NewProduct;