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
                if (currentShow <= 0) setCurrentShow(contents.length - 2);
                if (currentShow >= contents.length - 1) setCurrentShow(1);
        }, [currentShow, setCurrentShow]);

        React.useEffect(() => {
                const interval = setInterval(() => {
                        setCurrentShow(currentShow + 1);
                }, 5000);
                return () => clearInterval(interval);
        });

        return (
                <div className="slideshow">
                        <div className="slideshow__left-button" onClick={() => setCurrentShow(currentShow - 1)}>
                                <LeftIcon />
                        </div>
                        <div className="slideshow">
                                {contents.map((item, index) => (
                                        <div
                                                className={`slideshow__screen ${
                                                        index === currentShow ? "slideshow__screen--active" : ""
                                                }`}
                                        >
                                                <a href={item.link} className={`slideshow__screen__link`}>
                                                        <img
                                                                className="slideshow__screen__img"
                                                                src={item.imgUrl}
                                                                alt={item.content}
                                                        />
                                                </a>
                                        </div>
                                ))}
                        </div>
                        {/* <div className="slideshow__screen">
                                <a href={contents[6].link} className="slideshow__screen__link">
                                        <img
                                                className="slideshow__screen__img"
                                                src={contents[6].imgUrl}
                                                alt={contents[6].content}
                                        />
                                </a>
                                {contents.map((item, index) => (
                                        <a
                                                href={item.link}
                                                className={`slideshow__screen__link ${
                                                        index === currentShow ? `slideshow__screen__link--active` : ""
                                                }`}
                                        >
                                                <img
                                                        className="slideshow__screen__img"
                                                        src={item.imgUrl}
                                                        alt={item.content}
                                                />
                                        </a>
                                ))}
                                <a href={contents[0].link} className="slideshow__screen__link">
                                        <img
                                                className="slideshow__screen__img"
                                                src={contents[0].imgUrl}
                                                alt={contents[0].content}
                                        />
                                </a>
                        </div> */}
                        {/* <a
                                href={contents[currentShow] ? contents[currentShow].link : null}
                                className="slideshow__screen"
                        >
                                <img src={contents[currentShow] ? contents[currentShow].imgUrl : null} alt="" />
                        </a> */}
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
