import { useEffect, useState } from 'react';

export default function Header(props) {
    const { scrolled } = props;
    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <h2>Heaven Doors</h2>
            <div className="hStack">
                <i className="fa-solid fa-phone"></i>
                <p style={{fontWeight: 'bold'}}>(323) 555- 5555</p>
            </div>
        </header>
    )
}