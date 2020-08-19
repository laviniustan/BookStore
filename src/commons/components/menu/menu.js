import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import './menu.css'

const Menu = () => {
    return (
        <div className="header-menu">
            <div className="header-menu__image">
                <img
                    src={'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.' +
                            'jpg'}
                    className="header-menu__image--img"></img>
            </div>
            <span className="vert-line">&#124;</span>
            <GiHamburgerMenu className="hamburger"/>
            <h5>Menu</h5>

        </div>
    )
}
export default Menu