import { useEffect, useState } from 'react';
import Logo from '../assets/logo.svg';

export default function Header(props) {
    const { scrolled } = props;
    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>

            <a href="/">
                <img src={Logo} alt="Heaven Doors"/>
            </a>
            <div className="hStack">
                <i className="fa-solid fa-phone"></i>
                <p style={{fontWeight: 'bold'}}>(323) 540 - 0851</p>
            </div>
        </header>
    )
}