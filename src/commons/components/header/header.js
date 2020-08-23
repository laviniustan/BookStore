import React from 'react'
import Category from '../category/category'
import Search from '../search-bar/search-bar'
import Menu from '../menu/menu'
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">

                <Category/>
                <span>&#124;</span>
                <Search/>
            </div>
            <h3 className="header__name">BookStore</h3>
            <div className="header__right">

                <Menu/>
            </div>

        </div>
    )
}
export default Header