import * as React from "react";
import { ReactComponent as LeftIcon } from "../../icons/left.svg";
import { ReactComponent as RightIcon } from "../../icons/right.svg";

import "./style.scss";

export interface SlideShowProps {}

const contents = [
        {
                imgUrl: "https://divineshop.vn/image/catalog/Anh/Banner/cviec.png",
                link: "./",
                content: "Work",
        },
        {
                imgUrl: "https://divineshop.vn/image/catalog/Anh/Banner 14 thang 11/banner big.png",
                link: "./",
                content: "Data mobile",
        },
        {
                imgUrl: "https://divineshop.vn/image/catalog/Anh/Banner 14 thang 11/banner big 1 phút.png",
                link: "./",
                content: "1000 Dcoin",
        },
        {
                imgUrl: "https://divineshop.vn/image/catalog/Anh/Banner 23 thang 08/Banner hoctap.png",
                link: "./",
                content: "Study",
        },
        {
                imgUrl: "https://divineshop.vn/image/catalog/Anh/Banner/ung dung giai tri.png",
                link: "./",
                content: "Entertainment",
        },
        {
                imgUrl: "https://divineshop.vn/image/catalog/Anh/Banner/cviec.png",
                link: "./",
                content: "Work",
        },
        {
                imgUrl: "https://divineshop.vn/image/catalog/Anh/Banner 14 thang 11/banner big.png",
                link: "./",
                content: "Data mobile",
        },
];

const SlideShow: React.FunctionComponent<SlideShowProps> = () => {
        const [currentShow, setCurrentShow] = React.useState(1);

        React.useEffect(() => {
                if (currentShow < 1) setCurrentShow(contents.length - 2);
                if (currentShow > contents.length - 2) setCurrentShow(1);
        }, [currentShow, setCurrentShow]);

        React.useEffect(() => {
                const interval = setInterval(() => {
                        setCurrentShow(currentShow + 1);
                }, 5000);
                return () => clearInterval(interval);
        });

        const Swinger = React.useMemo(() => {
                const style = {
                        transform: `translateX(${(-currentShow / contents.length) * 100}%)`,
                        transition: currentShow < 1 || currentShow > contents.length - 1 ? "0s" : "1s",
                };
                return style;
        }, [currentShow]);

        return (
                <div className="slideshow">
                        <div className="slideshow__left-button" onClick={() => setCurrentShow(currentShow - 1)}>
                                <LeftIcon />
                        </div>
                        <div className="slideshow">
                                <div className="slideshow__screen" style={Swinger}>
                                        {contents.map((item, index) => (
                                                <div className={`slideshow__frame`} key={index}>
                                                        <a href={item.link} className={`slideshow__frame__link`}>
                                                                <img
                                                                        className="slideshow__frame__img"
                                                                        src={item.imgUrl}
                                                                        alt={item.content}
                                                                />
                                                        </a>
                                                </div>
                                        ))}
                                </div>
                        </div>
                        <div className="slideshow__dots">
                                {contents.map((item, index) => (
                                        <span
                                                key={index}
                                                className={`dot ${index === currentShow ? "dot--active" : ""}`}
                                                onClick={() => setCurrentShow(index)}
                                        ></span>
                                ))}
                        </div>
                        <div className="slideshow__right-button" onClick={() => setCurrentShow(currentShow + 1)}>
                                <RightIcon />
                        </div>
                </div>
        );
};

export default SlideShow;
