import * as React from "react";
import { ReactComponent as UserIcon } from "../../../icons/user.svg";
import { ReactComponent as CloseIcon } from "../../../icons/close.svg";

import { ReactComponent as HomeIcon } from "../../../icons/home.svg";
import { ReactComponent as MenuIcon } from "../../../icons/menu.svg";
import { ReactComponent as GamePadIcon } from "../../../icons/gamepad.svg";
import { ReactComponent as ShakeHandIcon } from "../../../icons/handshake.svg";
import { ReactComponent as creditCardIcon } from "../../../icons/creditcard.svg";
import { ReactComponent as SupportIcon } from "../../../icons/support.svg";
import { ReactComponent as PhoneIcon } from "../../../icons/phoneCall.svg";
import { ReactComponent as MessengerIcon } from "../../../icons/messenger.svg";

import "./style.scss";
interface IconProps {
        name: String;
        label: String;
        icon: React.FunctionComponent;
}

const linkService: IconProps[] = [
        { name: "home", label: "Trang Chủ", icon: HomeIcon },
        { name: "menu", label: "Danh mục sản phẩm", icon: MenuIcon },
        { name: "instruction", label: "Hướng dẫn mua hàng", icon: GamePadIcon },
        { name: "cooperation", label: "Liên hệ hợp tác", icon: ShakeHandIcon },
        { name: "payments", label: "Hình Thức thanh toán ", icon: creditCardIcon },
        { name: "support", label: "Hỗ trợ", icon: SupportIcon },
        { name: "phoneNumber", label: "19000 633 305", icon: PhoneIcon },
        { name: "MessengerIcon", label: "Nhắn tin cho Shop", icon: MessengerIcon },
];

export interface BurgerProps {}

const Burger: React.FunctionComponent<BurgerProps> = () => {
        const [isActive, setActive] = React.useState<Boolean>(false);
        return (
                <React.Fragment>
                        <div
                                className="burger"
                                onClick={() => {
                                        setActive(!isActive);
                                }}
                        >
                                <span></span>
                                <span></span>
                                <span></span>
                        </div>
                        <div className={`broad ${isActive ? "broad--active" : ""}`}>
                                <div className="broad__user">
                                        <div className="broad__user--icon">
                                                <UserIcon />
                                        </div>
                                        <div>
                                                <a href="./" className="broad__user__login">
                                                        Đăng nhập
                                                </a>
                                                <p className="broad__user__info">Xem nhiều thông tin hơn</p>
                                        </div>
                                        <div className="broad__user__close" onClick={() => setActive(false)}>
                                                <CloseIcon />
                                        </div>
                                </div>
                                <div className="broad__lists">
                                        <ul>
                                                {linkService.map((item) => {
                                                        return (
                                                                <li key={item.name ? (item.name as React.Key) : null}>
                                                                        <a href="./" className="broad__lists--label">
                                                                                <div className="broad__lists--icon">
                                                                                        <item.icon />
                                                                                </div>
                                                                                {item.label}
                                                                        </a>
                                                                </li>
                                                        );
                                                })}
                                        </ul>
                                </div>
                        </div>
                        <div className={`burger__black-screen ${isActive ? "burger__black-screen--active" : ""}`}></div>
                </React.Fragment>
        );
};

export default Burger;
