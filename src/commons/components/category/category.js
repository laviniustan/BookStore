import React, {useState} from 'react';
import "./category.css"

const Category = () => {

    return (
        <div>

            <div class="dropdown">
                <button class="dropdown--button">Browse Category &#8897;
                </button>
                <div class="dropdown-content">
                    <a href="#">Category1</a>
                    <a href="#">Category2</a>
                    <a href="#">Category3</a>
                </div>
            </div>

        </div>
    )
}
export default Category
