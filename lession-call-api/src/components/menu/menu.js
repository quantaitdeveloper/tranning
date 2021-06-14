import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
     
        <div>
          <nav class="nav justify-content-center">
            <NavLink class="nav-link active" to="/home">
              Trang chủ
            </NavLink>
            <NavLink class="nav-link" to="/products">
              Quản lý sản phẩm
            </NavLink>
          </nav>
        </div>
    
    );
  }
}

export default Menu;
