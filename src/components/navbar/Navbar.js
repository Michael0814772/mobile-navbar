import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { MenuList } from './MenuList';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './Navbar.css'

const Navbar = () => {

    const [clicked, setClicked] = useState(false);

    const menuList = MenuList.map(({ title, url }, index) => {
        return (
            <li key={index}>
                <NavLink exact to={url} activeClassName='active'>{title}</NavLink>
            </li>
        )
    })


    return (
        <nav>
            <div className="logo">
                VPN<font>Lab</font>
            </div>
            <div className="menu-icon" onClick={() => setClicked(!clicked)}>
                {clicked ? <AiOutlineClose className='close-icon' /> : <AiOutlineMenu className='open-icon' />}
            </div>
            <ul className={clicked ? "menu-list": "menu-list close"} onClick={() => setClicked(false)}>
                {menuList}
            </ul>
        </nav>
    )
}

export default Navbar
