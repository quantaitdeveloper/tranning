import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MESS_DELETE_SUCCESS } from '../constants/Message';
import * as actions from "../actions/index"

class CartItem extends Component {
    onDelete = (product) => {
        let check = window.confirm("Xác Nhận Xóa ?");
        if (check === true) {
            this.props.onDelete(product);
        }
    }
    onChange = (e) => {
        let value = e.target.value;
        this.props.onUpdateCart(this.props.cartItem.product, value);
    }
    render() {
        let { cartItem } = this.props;
        return (

            <tr>
                <td>
                    <div className="cart-info">
                        <img src={cartItem.product.image} alt="" />
                        <div>
                            <p>{cartItem.product.name}</p>
                            <small> {cartItem.product.discription}</small><br></br>
                            <strong>Price $ {cartItem.product.price}</strong>

                            <br />
                            <button className="btn-danger" onClick={() => this.onDelete(cartItem.product)}>Remove</button>
                        </div>
                    </div>
                </td>
                <td><input type="number" min="1" defaultValue={cartItem.quantity} onChange={this.onChange} /></td>
                <td>${cartItem.product.price * cartItem.quantity}</td>
            </tr>

        );
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapActionToProps = (dispatch, props) => {
    return {
        onUpdateCart: (product, quantity) => {
            dispatch(actions.updateCart(product, quantity))
        }
    }
}
export default connect(mapStateToProps, mapActionToProps)(CartItem);