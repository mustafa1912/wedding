import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
//const axios = require('axios'); // legacy way
import axios from 'axios';

function Header(api) {
    const [active, steActive] = useState(false)
    const [companySetting, setCompanySetting] = useState([])
    function openMenue() {
        steActive(true)
    }
    function closeMenue() {
        steActive(false)
    }

    useEffect(() => {
        // CompanySetting
        axios.get(`${api.api}/api/companySetting`)
            .then(function (response) {
                // handle success
                setCompanySetting(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    console.log(api.api)
    return (
        <React.Fragment>
            <div className="preloader" style={{ display: 'none' }}>
                <div className="vertical-centered-box">
                    <div className="content">
                        <div className="loader-circle"></div>
                        <div className="loader-line-mask">
                            <div className="loader-line"></div>
                        </div>
                        {companySetting.map((Element, index) => (
                            <React.Fragment key={index}>
                                {/*   <img src={api.api + '/storage/app/public/' + Element.image} alt={Element.name} title={Element.name} className="p-2" />  */}
                                <img src='./images/logo.png' alt={Element.name} title={Element.name} className="p-2" />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
            <header id="header" className="wpo-site-header wpo-header-style-1">
                <div className="topbar d-sm-block d-none"  >
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col col-lg-7 col-md-12 col-12">
                                <div className="contact-intro">
                                    <ul>
                                        {companySetting.map((Element, index) => (
                                            <React.Fragment key={index}>
                                                <li>
                                                    <i className="flaticon-email"></i>
                                                    <a href={"mailto:" + Element.email}>{Element.email}</a>
                                                </li>
                                                <li>
                                                    <i className="flaticon-phone-call"></i><a href={"tel:" + Element.tel}>{Element.tel}</a>
                                                </li>
                                                <li>
                                                    <i className="flaticon-maps-and-flags"></i>{Element.address} </li>
                                            </React.Fragment>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-lg-5 col-md-12 col-12">
                                <div className="contact-info">
                                    <ul className="clearfix">
                                        {companySetting.map((Element, index) => (
                                            <React.Fragment key={index}>
                                                <a href={Element.facebook} target="_blank" rel="noreferrer"><i
                                                    className="fi flaticon-facebook-app-symbol" ></i></a>
                                            </React.Fragment>
                                        ))}
                                        {companySetting.map((Element, index) => (
                                            <React.Fragment key={index}>
                                                <a href={Element.insta} target="_blank" rel="noreferrer"><i
                                                    className="fi flaticon-instagram-1" ></i></a>
                                            </React.Fragment>
                                        ))}
                                        {companySetting.map((Element, index) => (
                                            <React.Fragment key={index}>
                                                <a href={Element.twiter} target="_blank" rel="noreferrer"><i
                                                    className="fi flaticon-pinterest" ></i></a>
                                            </React.Fragment>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav id="site-navigation"
                    className="navigation navbar navbar-expand-lg navbar-light sticky-menu-on has-menu original sticky-on">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <button type="button" className={'navbar-toggler open-btn '} onClick={openMenue}>
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar first-angle"></span>
                                        <span className="icon-bar middle-angle"></span>
                                        <span className="icon-bar last-angle"></span>
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <div className="site-logo has_menu" >
                                        <NavLink className="navbar-brand" to="/">
                                            {companySetting.map((Element, index) => (
                                                <React.Fragment key={index}>
                                                    {/*   <img src={api.api + '/storage/app/public/' + Element.image} className='pt-2' alt={Element.name} title={Element.name} key={index} /> */}
                                                    <img src='./images/logo.png' alt={Element.name} title={Element.name} className="p-2" />
                                                </React.Fragment>
                                            ))}
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <div id="navbar"
                                    className={'collapse navbar-collapse navigation-holder has-menu has-cart has-search ' + active}>
                                    <button className="menu-close" onClick={closeMenue}>x</button>
                                    <ul id="menu-main-menu" className="nav navbar-nav menu nav-menu mb-2 mb-lg-0">
                                        <li id="menu-item-41"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home current-menu-ancestor current-menu-parent menu-item-has-children menu-item-41">
                                            <NavLink to="/" onClick={closeMenue}>Home</NavLink>
                                        </li>
                                        <li id="menu-item-63"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-63">
                                            <NavLink to="/portfolio" onClick={closeMenue}>Portfolio</NavLink>
                                        </li>
                                        <li id="menu-item-56"
                                            className="to-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-56">
                                            <NavLink to="/price" onClick={closeMenue}>Price</NavLink>
                                        </li>
                                        {/*     <li id="menu-item-56"
                                            className="to-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-56">
                                            <NavLink to="/about" onClick={closeMenue}>About</NavLink>
                                        </li>*/}
                                        <li id="menu-item-55"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-55">
                                            <NavLink to="/contact" onClick={closeMenue}>Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <div className="header-search-form-wrapper header-right">
                                    <div className="cart-search-contact">
                                        <div className="header-search-form">
                                            <form method="get" action="#" className="form">
                                                <div>
                                                    <input type="text" name="s" className="form-control"
                                                        placeholder="Search here" />
                                                    <button type="submit">
                                                        <i className="fi flaticon-search"></i>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </React.Fragment>
    )
}

export default Header