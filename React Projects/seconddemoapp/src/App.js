import React from "react";
import Products from "./components/Product";
import NewProduct from "./components/NewProduct";
import "./App.css";

const App = () => {
  const products = [
    {
      id:'p1',
      title:'ABC',
      cost:'100',
      mfgdate: new Date(2023, 8, 12)
    },
    {
      id:'p2',
      title:'GFT',
      cost:'140',
      mfgdate: new Date(2023, 11, 18)
    },
    {
      id:'p3',
      title:'XYZ',
      cost:'125',
      mfgdate: new Date(2023, 2, 8)
    },
    {
      id:'p4',
      title:'LKG',
      cost:'110',
      mfgdate: new Date(2023, 9, 28)
    }
  ]

  function printProductData(data){
    console.log("inside App.js");
    console.log(data)
  }

  return (
    <div className="App">
      <NewProduct onRendering={printProductData} />
      <Products items={products}/>
    </div>
  );
  
}

export default App;
