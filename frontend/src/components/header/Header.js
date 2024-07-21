import React, { useState } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Header = ({ logo }) => {

    const [displayMenu, setDisplayMenu] = useState(false)
    const [mobileMenuDisplay, setMobileMenuDisplay] = useState("")
    const [headerHeight, setHeaderHeight] = useState("")

    const showMenu = () => {
        if (!displayMenu) {
            setMobileMenuDisplay("flex")
            setHeaderHeight("270px")
            setDisplayMenu(true)
        }
        else {
            setMobileMenuDisplay("none")
            setHeaderHeight("69px")
            setDisplayMenu(false)
        }
    }

    return (
        <div className="header" style={{ height: `${headerHeight}` }}>
            <div className="navbar">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="" />
                </Link>

                <div className="desktopMenu">
                    <ul>
                        <li>
                            <Link to="/shop">home</Link>
                        </li>
                        <li>
                            <Link to="/">about</Link>
                        </li>
                        <li>
                            <Link to="/">works</Link>
                        </li>
                        <li>
                            <Link to="/">blog</Link>
                        </li>
                        <li>
                            <Link to="/">contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-rightMost" >
                    <div className="navbar-buttons">
                        <div className="navbar-button">
                            <Link to="/">
                                <FontAwesomeIcon className="navbar-icon" icon={faMagnifyingGlass} />
                            </Link>
                        </div>
                        <div className="navbar-button">
                            <Link to="/login">
                                <FontAwesomeIcon className="navbar-icon" icon={faUser} />
                            </Link>
                        </div>
                        <div className="navbar-bars" onClick={showMenu}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobileMenu" style={{ display: `${mobileMenuDisplay}` }}>
                <ul>
                    <li>
                        <Link to="/shop">home</Link>
                    </li>
                    <li>
                        <Link to="/">about</Link>
                    </li>
                    <li>
                        <Link to="/">works</Link>
                    </li>
                    <li>
                        <Link to="/">blog</Link>
                    </li>
                    <li>
                        <Link to="/">contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header