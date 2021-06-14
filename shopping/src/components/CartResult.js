import React, { Component } from 'react';

class CartResult extends Component {
    onComplete = () => {
        alert("Đặt hàng thành công !")
        localStorage.removeItem('cart');
        window.location.reload();
    }
    render() {
        let { total } = this.props;
        let tax = 15;
        return (
            <div className="total-price ">
                <table>
                    <tbody><tr>
                        <td>Subtotal</td>
                        <td>${total}</td>
                    </tr>
                        <tr>
                            <td>Tax</td>
                            <td>${tax}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>${total - tax}</td>
                        </tr>
                    </tbody>
                    <button className="btn btn-success" onClick={this.onComplete}>Complele PurChase</button>
                </table>
            </div>
        );
    }
}

export default CartResult;

