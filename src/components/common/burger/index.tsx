import * as React from "react";
import "./style.scss";

export interface BurgerProps {}

const Burger: React.FunctionComponent<BurgerProps> = () => {
        return (
                <div className="burger" onClick={() => {}}>
                        <span></span>
                        <span></span>
                        <span></span>
                </div>
        );
};

export default Burger;
