import * as React from "react";
import SlideShow from "../components/slideShow";

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
        return (
                <React.Fragment>
                        <div className="catalog">
                                <div>
                                        <SlideShow />
                                        <div>
                                                <a href="./"></a>
                                        </div>
                                </div>
                        </div>
                </React.Fragment>
        );
};

export default Home;
