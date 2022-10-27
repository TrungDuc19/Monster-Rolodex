import React from "react";
import './search-box.style.scss'

export const SearchBox = props => {
    const { placeholder, handleChange } = props;
    return (
        <input
            className="search"
            type="search"
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}