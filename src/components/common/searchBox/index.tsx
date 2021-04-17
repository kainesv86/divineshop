import * as React from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as SearchIcon } from "../../../icons/search.svg";

import "./style.scss";

export interface SearchBoxProps {
        label: String;
}

interface DataProps {
        data: String;
}

const SearchBox: React.FunctionComponent<SearchBoxProps> = (props) => {
        const { label } = props;
        const { register, handleSubmit } = useForm<DataProps>({ defaultValues: { data: "" } });

        const onSubmit = (data) => {
                console.log(data);
        };

        return (
                <form className="search-box" onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("data")} placeholder={`${label}`} />
                        <button className="search-button" type="submit">
                                <SearchIcon />
                        </button>
                </form>
        );
};

export default SearchBox;
