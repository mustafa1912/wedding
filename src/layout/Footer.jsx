import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

//const axios = require('axios'); // legacy way
import axios from 'axios';

function Footer(api) {
    const [portfolio, setPortfolio] = useState([])
    const [companySetting, setCompanySetting] = useState([])

    useEffect(() => {
        // Portfolio
        axios.get(`${api.api}/api/Portfolio`)
            .then(function (response) {
                // handle success
                setPortfolio(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
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

    return (
        <React.Fragment>
            <footer className="wpo-site-footer clearfix mt-2">
                <div className="wpo-upper-footer">
                    <div className="footer-widget-area">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="separator"></div>
                                <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                    <div className="widget text-widget">
                                        <div className="widget about-widget">
                                            {companySetting.map((Element, index) => (
                                                <React.Fragment key={index}>
                                                    <div className="logo widget-title m-0">
                                                        {/*   <img src={api.api + '/storage/app/public/' + Element.image} alt={Element.name} title={Element.name} />*/}
                                                        <img src='./images/logo.png' alt={Element.name} title={Element.name}   className="p-2"/>
                                                    </div>
                                                    <p className="text-center">
                                                        {Element.notes}
                                                    </p>
                                                </React.Fragment>
                                            ))}
                                            <div className="social-icons">
                                                <ul>
                                                    <li>
                                                        {companySetting.map((Element, index) => (
                                                            <React.Fragment key={index}>
                                                                <a href={Element.facebook} target="_blank" rel="noreferrer"  ><i
                                                                    className="flaticon-facebook-app-symbol"></i></a>
                                                            </React.Fragment>
                                                        ))}
                                                    </li>
                                                    <li>
                                                        {companySetting.map((Element, index) => (
                                                            <React.Fragment key={index}>
                                                                <a href={Element.insta} target="_blank" rel="noreferrer"><i
                                                                    className="flaticon-instagram"></i></a>
                                                            </React.Fragment>
                                                        ))}
                                                    </li>
                                                    <li>
                                                        {companySetting.map((Element, index) => (
                                                            <React.Fragment key={index}>
                                                                <a href={Element.twiter} target="_blank" rel="noreferrer"><i
                                                                    className="flaticon-pinterest"></i></a>
                                                            </React.Fragment>
                                                        ))}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="col col-lg-3 col-md-6 col-sm-12 col-12 d-sm-block d-none">
                                    <div className="widget link-widget">
                                        <div className="widget-title">
                                            <h3>Information</h3>
                                        </div>
                                        <div className="nav-notenabled-child">
                                            <div className="menu-information-container">
                                                <ul id="menu-information-1" className="menu -sidenav">
                                                    <li
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-611">
                                                        <NavLink to="/">Home</NavLink>
                                                    </li>
                                                    <li
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-607">
                                                        <NavLink to="about">About Us</NavLink>
                                                    </li>
                                                    <li
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-612">
                                                        <NavLink to="Portfolio">Portfolio</NavLink>
                                                    </li>
                                                    <li
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-609">
                                                        <NavLink to="price">Price</NavLink>
                                                    </li>
                                                    <li
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-610">
                                                        <NavLink to="contact">contact Us</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="col col-lg-3 col-md-6 col-sm-12 col-12 d-sm-block d-none">
                                    <div className="widget text-widget">
                                        <div className="widget-title">
                                            <h3>Address</h3>
                                        </div>
                                        <div className="contact-ft">
                                            <p>
                                                Would you have any enquiries. Lease feel free to contact
                                                us
                                            </p>
                                            {companySetting.map((Element, index) => (
                                                <React.Fragment key={index}>
                                                    <ul>
                                                        <li>
                                                            <i className="flaticon-email"></i>
                                                            <a href={"mailto:" + Element.email}>{Element.email}</a>
                                                        </li>
                                                        <li>
                                                            <i className="flaticon-phone-call"></i><a href={"tel:" + Element.tel}>{Element.tel}</a>
                                                        </li>
                                                        <li>
                                                            <i className="flaticon-maps-and-flags"></i>{Element.address} </li>
                                                    </ul>
                                                </React.Fragment>
                                            ))}
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="col col-lg-3 col-md-6 col-sm-12 col-12 d-sm-block d-none">
                                    <div className="widget widget_media_gallery">
                                        <div className="widget-title">
                                            <h3>Photography</h3>
                                        </div>
                                        <div id="gallery-2"
                                            className="gallery galleryid-16 gallery-columns-3 gallery-size-thumbnail">
                                            {portfolio.map((Element, index) => (
                                                <figure className="gallery-item" key={index}>
                                                    <div className="gallery-icon portrait">
                                                        {index < 6 ?
                                                            <img width="150" height="150"
                                                                src={api.api + '/storage/app/public/' + Element.image}
                                                                className="attachment-thumbnail size-thumbnail" alt={Element.name} title={Element.name} decoding="async"
                                                                loading="lazy" />
                                                            : ''}
                                                    </div>
                                                </figure>
                                            ))}
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wpo-lower-footer has-not-copyright text-center">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="separator"></div>
                            <div className="col col-xs-12">
                                <p>
                                    © Copyright 2022 |
                                    <a href="#" className="m-1 me-1" target="_blank" rel="noreferrer">
                                        youhnaa magdy
                                    </a>
                                    | All right reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer