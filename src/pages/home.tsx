import * as React from "react";
import SlideShow from "../components/slideShow";

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
        return (
                <React.Fragment>
                        <SlideShow />
                </React.Fragment>
        );
};

export default Home;
