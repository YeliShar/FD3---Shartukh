"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import ProductGrid from './components/ProductGrid';

let Samsung = require('./Samsung.json'); 
let SamsungnameProduct = require('./SamsungnameProduct.json'); 

ReactDOM.render(
    <ProductGrid 
    Samsungshop = {Samsung}
    SamsungnameProduct = {SamsungnameProduct}
    selectedProductCode ={null} />, 
    document.getElementById('storeDiv') 
);
