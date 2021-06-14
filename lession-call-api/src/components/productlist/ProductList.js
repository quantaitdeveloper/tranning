import React, { Component } from 'react';
import ProductItem from '../productitem/ProductItem';
import {Link} from "react-router-dom";

class ProductList extends Component {
    render() {
        return (
            <div class="container">
            <div class="row">
              <div class="col-lg-12">
              <Link to="/add"><button className="btn btn-primary">Thêm Sản Phẩm</button></Link>
                <table class="table">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Mã</th>
                      <th>Tên</th>
                      <th>Giá</th>
                      <th>Trạng thái</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.props.children}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
    }
}

export default ProductList;
