import { useEffect, useState } from 'react';

export default function Header(props) {
    const { scrolled } = props;
    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <h2><a href="/">Heaven Doors</a></h2>
            <div className="hStack">
                <i className="fa-solid fa-phone"></i>
                <p style={{fontWeight: 'bold'}}>(323) 540 - 0851</p>
            </div>
        </header>
    )
}