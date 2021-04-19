import * as React from "react";
import { ReactComponent as LeftIcon } from "../../icons/left.svg";
import { ReactComponent as RightIcon } from "../../icons/right.svg";

import "./style.scss";

export interface SlideShowProps {}
const dots = [0, 1, 2, 3, 4];

const SlideShow: React.FunctionComponent<SlideShowProps> = () => {
        const [currentShow, setCurrentShow] = React.useState(0);

        React.useEffect(() => {
                if (currentShow < 0) setCurrentShow(4);
                if (currentShow > 4) setCurrentShow(0);
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
                        <div className="slideshow__dots">
                                {dots.map((index) =>
                                        index === currentShow ? (
                                                <span key={index} className="dot dot--active"></span>
                                        ) : (
                                                <span
                                                        key={index}
                                                        className="dot"
                                                        onClick={() => setCurrentShow(index)}
                                                ></span>
                                        )
                                )}
                        </div>
                        <div className="slideshow__right-button" onClick={() => setCurrentShow(currentShow + 1)}>
                                <RightIcon />
                        </div>
                </div>
        );
};

export default SlideShow;
