import * as React from "react";
import { ReactComponent as UserIcon } from "../../../icons/user.svg";
import "./style.scss";

export interface UserProps {}

const User: React.FunctionComponent<UserProps> = () => {
        return (
                <div className="user">
                        <div className="user-icon">
                                <UserIcon />
                        </div>
                        <span>Đăng nhập</span>
                </div>
        );
};

export default User;
