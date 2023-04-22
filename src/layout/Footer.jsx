import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

//const axios = require('axios'); // legacy way
import axios from 'axios';

function Footer(api) {
    const [portfolio, setPortfolio] = useState([])
    const [companySetting, setCompanySetting] = useState([])

    useEffect(() => {
        // Portfolio
        // axios.get(`${api.api}/api/Portfolio`)
        //     .then(function (response) {
        //         // handle success
        //         setPortfolio(response.data)
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        // CompanySetting
        // axios.get(`${api.api}/api/companySetting`)
        //     .then(function (response) {
        //         // handle success
        //         setCompanySetting(response.data)
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        setPortfolio(
            [{
                "id": 10, "main_address": "american garden halls", "image": "/bq6UAL1vS82ZlqArnj6ZaitNZsYSTZvDe9gENWTt.webp", "category":
                    "Mina & Mariam", "date": "2023-02-01", "created_at": "2023-04-17T22:31:07.000000Z", "updated_at": "2023-04-17T22:31:07.000000Z"
            },
            {
                "id": 11, "main_address": "american garden halls", "image": "/2irHvMzIpA1MKmjn2fHwVUxFGVzTw53Gf2jxwlp7.webp",
                "category": "Mina & Mariam", "date": "2023-02-01", "created_at": "2023-04-17T22:31:29.000000Z", "updated_at": "2023-04-17T22:31:29.000000Z"
            },
            {
                "id": 12, "main_address": "american garden halls", "image": "/Tuj3Yx0HII3FyJrMePW9dimFqZbrCGW7zFV4YdII.webp", "category": "Mina & Mariam",
                "date": "2023-02-01", "created_at": "2023-04-17T22:31:42.000000Z", "updated_at": "2023-04-17T22:31:42.000000Z"
            }, {
                "id": 13, "main_address": "american garden halls",
                "image": "/1Q3na6qQYa2VG7ChcMR6q89y6rGkdIYfzPtxeBV6.webp", "category": "Mina & Mariam", "date":
                    "2023-02-01", "created_at": "2023-04-17T22:31:57.000000Z", "updated_at": "2023-04-17T22:31:57.000000Z"
            }, {
                "id": 14,
                "main_address": "american garden halls", "image": "/e6rhP9bLw5Hp4e2cuRBOfixngZjUptEehNU3npn8.webp", "category":
                    "Mina & Mariam", "date": "2023-02-18", "created_at": "2023-04-17T22:32:18.000000Z", "updated_at": "2023-04-17T22:32:18.000000Z"
            },
            {
                "id": 15, "main_address": "american garden halls", "image": "/MrLKA6mRB320u1RGXfUmvn0nS3vwILw5H5ML4j8Z.webp",
                "category": "Mina & Mariam", "date": "2023-02-01", "created_at": "2023-04-17T22:32:37.000000Z", "updated_at": "2023-04-17T22:32:37.000000Z"
            },
            {
                "id": 16, "main_address": "american garden halls", "image": "/bTiZesbFlkOdWWD03VUqQwKruE5boOReUfJPDFdu.webp", "category": "Mina & Mariam",
                "date": "2023-02-01", "created_at": "2023-04-17T22:32:50.000000Z", "updated_at": "2023-04-17T22:32:50.000000Z"
            }, {
                "id": 17, "main_address": "american garden halls",
                "image": "/NurS9fkwdZkSQHA7TFhFvimXVGSVPG9xxHvS4GGX.webp", "category": "Mina & Mariam", "date": "2023-02-01",
                "created_at": "2023-04-17T22:33:00.000000Z", "updated_at": "2023-04-17T22:33:00.000000Z"
            }, {
                "id": 18, "main_address": "american garden halls",
                "image": "/2NhLotdflxk7MgoLa9zAkNl49o6ewRd1HwKyT4yw.webp", "category": "Mina & Mariam", "date": "2023-02-01", "created_at": "2023-04-17T22:33:16.000000Z", "updated_at": "2023-04-17T22:33:16.000000Z"
            }, {
                "id": 19, "main_address": "american garden halls",
                "image": "/emD65nonXdWxcvU8mNzIsHe1MD1FuXkEjH4mfFHz.webp", "category": "Mina & Mariam", "date": "2023-04-01",
                "created_at": "2023-04-17T22:33:29.000000Z", "updated_at": "2023-04-17T22:33:29.000000Z"
            }, {
                "id": 20, "main_address": "american garden halls",
                "image": "/xabQoD20EaIVMWJgyNLAiKUFSaHPB5odd3Nqw1D7.webp", "category": "Mina & Mariam", "date": "2023-04-01", "created_at":
                    "2023-04-17T22:34:56.000000Z", "updated_at": "2023-04-17T22:34:56.000000Z"
            }, {
                "id": 21, "main_address": "daba"
                , "image": "/WvQIjeIVHfUyMTOw6ieQDReLU9lPOxaX3RzqvGJH.webp", "category": "Andrew & Mariam", "date":
                    "2023-03-20", "created_at": "2023-04-17T22:35:14.000000Z", "updated_at": "2023-04-17T22:35:14.000000Z"
            }, { "id": 22, "main_address": "daba", "image": "/hv2XJ4MMLMKbLYf9IaUrE8qK8bgAyhSXrnP7gWv3.webp", "category": "Andrew & Mariam", "date": "2023-03-20", "created_at": "2023-04-17T22:35:28.000000Z", "updated_at": "2023-04-17T22:35:28.000000Z" }, { "id": 23, "main_address": "florenta location", "image": "/WwR6Cb47gDn4vJ4SfjQyWj7FqrSTBja1f3VJvhxR.webp", "category": "wassiem & eva", "date": "2023-02-03", "created_at": "2023-04-17T22:36:29.000000Z", "updated_at": "2023-04-17T22:36:29.000000Z" }, { "id": 24, "main_address": "florenta location", "image": "/OzR48daoKPGWRSIzcufK9B1pTa3OzRBfovcs3Rv0.webp", "category": "wassiem & eva", "date": "2023-02-03", "created_at": "2023-04-17T22:36:44.000000Z", "updated_at": "2023-04-17T22:36:44.000000Z" }, { "id": 25, "main_address": "florenta location", "image": "/DwTUuD6Bzpdu8S4w5ZwOE6hiPLz460ZytHFBczC1.webp", "category": "wassiem & eva", "date": "2023-02-03", "created_at": "2023-04-17T22:37:00.000000Z", "updated_at": "2023-04-17T22:37:00.000000Z" }, { "id": 26, "main_address": "florenta location", "image": "/u05lGMcFigWa1bxtLgrhDe0RURnqBMnreIccRSIN.webp", "category": "wassiem & eva", "date": "2023-02-03", "created_at": "2023-04-17T22:37:18.000000Z", "updated_at": "2023-04-17T22:37:18.000000Z" }, { "id": 27, "main_address": "florenta location", "image": "/8xLICFlZO0srLk8krl55t9CSpitbp3b2AISsLYLi.webp", "category": "wassiem & eva", "date": "2023-02-03", "created_at": "2023-04-17T22:37:34.000000Z", "updated_at": "2023-04-17T22:37:34.000000Z" }, { "id": 28, "main_address": "florenta location", "image": "/IMCtFe2OZNYvpyqDiaeS6iz51goLZk1II9RtBEdZ.webp", "category": "wassiem & eva", "date": "2023-02-03", "created_at": "2023-04-17T22:37:47.000000Z", "updated_at": "2023-04-17T22:37:47.000000Z" }, { "id": 29, "main_address": "florenta location", "image": "/5R8cRqv30y0leE5iLzD2lUFDCpN3oc4cKvAWsAfJ.webp", "category": "wassiem & eva", "date": "2023-02-03", "created_at": "2023-04-17T22:38:11.000000Z", "updated_at": "2023-04-17T22:38:11.000000Z" }, { "id": 30, "main_address": "florenta location", "image": "/RJpItLrcabYJQQ0dL2F4N5i8KEeIns4kHCwRhcTz.webp", "category": "mikhael & marina", "date": "2023-01-01", "created_at": "2023-04-17T22:39:11.000000Z", "updated_at": "2023-04-17T22:39:11.000000Z" }]
        )
        setCompanySetting([{
            "id": 1, "name": "Youhnaa Magdy", "image": null,
            "address": "Shebin El-Kom - Menoufia", "notes": "Behind every moment there is a photo make us remember it",
            "links": "https:\/\/www.google.com\/maps\/place\/Shibin+el+Kom,+Menofia+Governorate\/@30.5559056,30.9745792,14z\/data=!3m1!4b1!4m6!3m5!1s0x14f7d6f3a7714525:0xc0bc979946137d21!8m2!3d30.5563944!4d31.0048384!16s%2Fg%2F11hdx5my0n", "facebook": "https:\/\/www.facebook.com\/Youhannamagdy12?mibextid=ZbWKwL", "twiter": "#", "insta": "https:\/\/instagram.com\/youhannamagdyphotography?igshid=ZDdkNTZiNTM=",
            "tel": "1554405660", "email": "youhnaamagdy12@gmail.com", "created_at": null, "updated_at": null
        }])
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
                                                        {/*   <img src={ '/storage' + Element.image} alt={Element.name} title={Element.name} />*/}
                                                        <img src='./images/logo.png' alt={Element.name} title={Element.name} className="p-2" />
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
                                                                <a href={Element.facebook} target="_blank" rel="noreferrer" aria-label="facebook"  ><i
                                                                    className="flaticon-facebook-app-symbol"></i></a>
                                                            </React.Fragment>
                                                        ))}
                                                    </li>
                                                    <li>
                                                        {companySetting.map((Element, index) => (
                                                            <React.Fragment key={index}>
                                                                <a href={Element.insta} target="_blank" rel="noreferrer" aria-label="instagram"><i
                                                                    className="flaticon-instagram"></i></a>
                                                            </React.Fragment>
                                                        ))}
                                                    </li>
                                                    <li>
                                                        {companySetting.map((Element, index) => (
                                                            <React.Fragment key={index}>
                                                                <a href={'https://wa.me/' + Element.tel} target="_blank" rel="noreferrer" aria-label="whatsapp"><i
                                                                    className="fab fa-whatsapp"></i></a>
                                                            </React.Fragment>
                                                        ))}
                                                    </li>
                                                    <li>
                                                        {companySetting.map((Element, index) => (
                                                            <React.Fragment key={index}>
                                                                <a href={"tel:" + Element.tel} rel="noreferrer" aria-label="phone"><i
                                                                    className="flaticon-phone-call"></i></a>
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
                                                <React.Fragment key={index}>
                                                    {index < 6 ?
                                                        <figure className="gallery-item" >
                                                            <div className="gallery-icon portrait">
                                                                <img width="150" height="150"
                                                                    src={'/storage' + Element.image}
                                                                    className="attachment-thumbnail size-thumbnail" alt={Element.name} title={Element.name} decoding="async"
                                                                    loading="lazy" />
                                                            </div>
                                                        </figure>
                                                        : null}
                                                </React.Fragment>
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
            </footer >
        </React.Fragment >
    )
}

export default Footer