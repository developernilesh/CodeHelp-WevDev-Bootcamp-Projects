import React, {useState} from "react";

import './ProductForm.css';

const ProductForm = (props) =>{

    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value);
        // console.log(event.target.value);
    }
    function dateChangeHandler(event){
        setDate(event.target.value);
        // console.log(event.target.value);
    }
    function submitHandler(event){
        event.preventDefault();

        const productData = {
            title:newTitle,
            date:newDate
        } 
        // console.log(productData)
        props.onSaving(productData);

        setTitle('');
        setDate('');
    }

    return (
        <form onSubmit={submitHandler} className='new-product-controls'>
            <div className="new-product-control">
                <label>Title : </label>
                <input type="text" value={newTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-product-control">
                <label>Date : </label>
                <input type="date" value={newDate} onChange={dateChangeHandler} />
            </div>
            <div className="new-product-button">
                <button type="submit">Add Product</button>
            </div>
        </form>
    );
}

export default ProductForm;