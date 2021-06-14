import React, { Component } from "react";

class ProductItem extends Component {
  render() {
      let {product, index} = this.props;
    return (
      <tr>
        <td scope="row">{index+1}</td>
        <td>{product.brand}</td>
        <td>{product.name}</td>
        <td>{product.price}$</td>
        <td>
            <span className={product.amount>0?"badge badge-success":"badge badge-danger"}>{product.amount>0?"Còn hàng":"Hết Hàng"}</span>
        </td>
        <td>
          <button className="btn btn-danger">Sửa</button>
          <button className="btn btn-danger">Xóa</button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
