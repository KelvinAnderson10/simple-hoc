import { render } from "@testing-library/react";
import { Component } from "react";
import WithSearch from "../../shared/WithSearch";
import ProductCard from "./ProductCard";

class ProductList extends Component{
    render(){
        const {name, value, handleInput, data} = this.props
        let filteredProduct = data.filter(p => (p.productName.toLowerCase().includes(value.toLowerCase())))
        console.log(filteredProduct);
        return(
            <div>
                <div>
                    <h2>Product</h2>
                </div>
                <div>
                    <input name={name} value={value} type='text' placeholder='Search product name' onChange={handleInput}></input>
                </div>
                <div>
                    {filteredProduct.map((p) => <ProductCard key = {p.productId} data={p}/>)}
                </div>
            </div>
        
        )
    }

}

export default WithSearch(ProductList);