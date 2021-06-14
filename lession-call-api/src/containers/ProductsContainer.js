import React, {Component} from 'react';
import {connect} from "react-redux";
import ProductList from "../components/productlist/ProductList";
import ProductItem from "../components/productitem/ProductItem";
import callAPI from "../ultils/apiCaller";
class ProductsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products :[]
        }
    }

    componentDidMount() {
        console.log(callAPI('products','GET', null))
        callAPI('products','GET', null).then(res=>{
            this.setState({
                products: res.data
            });
        });


    }
    showProducts =(products)=>{
        let result = "";
        if(products.length >0){
            result = products.map((product , index)=>{
                return <ProductItem product={product} key={index} index={index} />
            })
        }
        return result;
    }

    render() {
        let {products} = this.state;
        // let {products} = this.props

        return (
            <ProductList>
                {this.showProducts(products)}
            </ProductList>
        );
    }
}

const mapStateToProps = state =>{
    return {
        products : state.products
    }
}
export default connect(mapStateToProps ,null )(ProductsContainer);