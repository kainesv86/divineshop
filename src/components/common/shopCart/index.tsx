import * as React from "react";
import { ReactComponent as CartIcon } from "../../../icons/cart.svg";
import "./style.scss";

export interface ShopCartProps {}

const ShopCart: React.FunctionComponent<ShopCartProps> = () => {
        const [count, setCount] = React.useState(0);
        return (
                <div className="shop-cart">
                        <CartIcon />
                        <b>Giỏ hàng</b>
                        <span>{count}</span>
                </div>
        );
};

export default ShopCart;
