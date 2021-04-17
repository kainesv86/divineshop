import * as React from "react";

import Burger from "../common/burger";
import SearchBox from "../common/searchBox";
import ShopCart from "../common/shopCart";
import User from "../common/user";

import "./style.scss";

export interface NavBarProps {}

const logo = (
        <a className="logo" href="./">
                <div className="logo-icon">
                        <img src="https://divineshop.vn/assets/resources/logo_divine_pure_white.png" alt="" />
                </div>
                <div className="logo-text">
                        <img src="https://divineshop.vn/assets/resources/logo-1.png" alt="" />
                </div>
        </a>
);

const NavBar: React.FunctionComponent<NavBarProps> = () => {
        return (
                <div className="navbar">
                        <div className="navbar-pc">
                                {logo}
                                <SearchBox label="Nhập sản phẩm cần tìm..." />
                                <div className="navbar-pc__user">
                                        <User />
                                        <ShopCart />
                                </div>
                        </div>
                        <div className="navbar-mobile">
                                <Burger />
                                <SearchBox label="Nhập sản phẩm cần tìm..." />
                                <ShopCart />
                        </div>
                </div>
        );
};

export default NavBar;
