import React from "react";
import ProductSorter from "../components/ProductSorter.jsx";
import products from "../productData";
export default function ShopMenu() {
    return (
        <div className="section">
            <h2 style={{alignSelf: 'flex-start'}}>Shop our Products</h2>
            <ProductSorter products={products} asLinks={true} />
        </div>
    )
}