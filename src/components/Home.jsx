import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// Helmet
import { Helmet } from "react-helmet-async";
//const axios = require('axios'); // legacy way
import axios from 'axios';
// OwlCarousel
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// animate
import 'animate.css/animate.min.css';

function Home(api) {
    const [slider, setSlider] = useState([])
    const [portfolio, setPortfolio] = useState([])
    const [price, setPrice] = useState([])
    const [priceDescription, setPriceDescription] = useState([])
    const [client, setClient] = useState([])
    const [team, setTeam] = useState([])

    useEffect(() => {
        // slider
        // axios.get(`${api.api}/api/slider`)
        //     .then(function (response) {
        //         // handle success
        //         setSlider(response.data)
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
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
        // price
        // axios.get(`${api.api}/api/Price`)
        //     .then(function (response) {
        //         // handle success
        //         setPrice(response.data)
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        // price description
        // axios.get(`${api.api}/api/description`)
        //     .then(function (response) {
        //         // handle success
        //         setPriceDescription(response.data)
        //         console.log(priceDescription)

        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        // // Client
        // axios.get(`${api.api}/api/client`)
        //     .then(function (response) {
        //         // handle success
        //         setClient(response.data)
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        // // Team
        // axios.get(`${api.api}/api/team`)
        //     .then(function (response) {
        //         // handle success
        //         setTeam(response.data)
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        setSlider([
            {
                "address": "Efficiency", "image": "/76avRXe1zE2PDUY1SyceQBbLIvHmBjrwPn0jvyN3.webp",
                "notes": "Capture beautiful moments and minute details of special events.",
                "id": 1, "created_at": "2023-04-17T23:26:01.000000Z", "updated_at": "2023-04-17T23:26:01.000000Z"
            },
            {
                "address": "the quality", "image": "/Kk8sB4D0q1x3uFd4Qwof8xIWAp2wEZ5H4j5aLVj0.webp",
                "notes": "We use high quality images to showcase the latest work of our photographers",
                "id": 2, "created_at": "2023-04-17T23:26:53.000000Z", "updated_at": "2023-04-17T23:26:53.000000Z"
            }])
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
        setPrice([
            {
                "id": 1, "image": "/wETS3GyqFwJGIYs9y8uOZrwIwiL5doP6bceYVl97.webp",
                "name": 'Halfday ', "price": "  3000", "discount": "0", "discount_percentage": null, "notes":
                    null, "details": null, "created_at": "2023-04-17T22:18:07.000000Z", "updated_at":
                    "2023-04-17T22:18:07.000000Z"
            }, {
                "id": 2, "image": "/lwnGyg1u9tkD9Nx2T2uyVVAEY7Y3hhvkYGIm491v.webp",
                "name": 'Fullday', "price": "4000", "discount": "0", "discount_percentage": null, "notes": null, "details": null, "created_at":
                    "2023-04-17T22:19:31.000000Z", "updated_at": "2023-04-17T22:19:31.000000Z"
            },
            {
                "id": 3, "image": "/emEahvSsTahrOMq6uAf0LTtt0nAChEqDoXHVxZRU.webp", "name": 'Fullday plus ',
                "price": "  7000", "discount": "0", "discount_percentage": null, "notes": null, "details": null,
                "created_at": "2023-04-17T22:20:50.000000Z", "updated_at": "2023-04-17T22:20:50.000000Z"
            }])
        setClient([{ "id": 1, "image": "/JTyXLm6te1BVzv8uPApkJg2YgLeGQ9avxW3tw6Xh.webp", "name": "mikhael & marina", "address": "0", "notes": "This is not only a wedding planning agency but also a dreamy friend. I am very glad to work with them. They make my dream come true. In my wedding  I found them as my best friends. ", "created_at": "2023-04-17T23:07:07.000000Z", "updated_at": "2023-04-17T23:13:21.000000Z" }, { "id": 2, "image": "/DsBi6eKXOLIcf2pseOgp9sVruGToAqCiMLE8g5kj.webp", "name": "Andrew & Mariam", "address": "0", "notes": "Andrew & Mariam", "created_at": "2023-04-17T23:08:13.000000Z", "updated_at": "2023-04-17T23:13:29.000000Z" }, {
            "id": 3, "image": "/BtqaJvRy1Psieb1HjM6U0aymu2ufIN5vmtn197lL.webp", "name": "wassiem & eva", "address": "", "notes": "This is not only a wedding planning agency but also a dreamy friend. I am very glad to work with them. They make my dream come true. In my wedding  I found them as my best friends. ",
            "created_at": "2023-04-17T23:09:17.000000Z", "updated_at": "2023-04-17T23:13:35.000000Z"
        }])
        setPriceDescription([
            {
                "id": 1, "price_id": 1, "notes": "One photographer", "created_at": "2023-04-17T22:18:07.000000Z", "updated_at": "2023-04-17T22:18:07.000000Z"
            },
            {
                "id": 2, "price_id": 1, "notes": "Photosession", "created_at": "2023-04-17T22:18:07.000000Z", "updated_at": "2023-04-17T22:18:07.000000Z"
            },
            {
                "id": 3, "price_id": 1, "notes": "Curch shoots(for ch)", "created_at": "2023-04-17T22:18:07.000000Z", "updated_at": "2023-04-17T22:18:07.000000Z"
            }
            ,
            {
                "id": 4, "price_id": 2, "notes": "2 photographer", "created_at": "2023-04-17T22:18:07.000000Z", "updated_at": "2023-04-17T22:18:07.000000Z"
            },
            {
                "id": 5, "price_id": 2, "notes": "Preparation shoots", "created_at": "2023-04-17T22:18:07.000000Z", "updated_at": "2023-04-17T22:18:07.000000Z"
            },
            {
                "id": 6, "price_id": 2, "notes": "Photosession", "created_at": "2023-04-17T22:18:07.000000Z", "updated_at": "2023-04-17T22:18:07.000000Z"
            },
            {
                "id": 7, "price_id": 2, "notes": "Curch shoots(for ch)", "created_at": "2023-04-17T22:18:07.000000Z", "updated_at": "2023-04-17T22:18:07.000000Z"
            }
            ,
            {
                "id": 8, "price_id": 3, "notes": "2 photographer", "created_at": "2023-04-17T22:18:07.000000Z", "updated_at": "2023-04-17T22:18:07.000000Z"
            },
            {
                "id": 9, "price_id": 3, "notes": "Promo video", "created_at": "2023-04-17T22:18:07.000000Z", "updated_at": "2023-04-17T22:18:07.000000Z"
            }
            ,
            {
                "id": 10, "price_id": 3, "notes": "Preparation shoots ", "created_at": "2023-04-17T22:18:07.000000Z", "updated_at": "2023-04-17T22:18:07.000000Z"
            }
            ,
            {
                "id": 11, "price_id": 3, "notes": "Photosession ", "created_at": "2023-04-17T22:18:07.000000Z", "updated_at": "2023-04-17T22:18:07.000000Z"
            }
            ,
            {
                "id": 12, "price_id": 3, "notes": "Curch shoots(for ch)", "created_at": "2023-04-17T22:18:07.000000Z", "updated_at": "2023-04-17T22:18:07.000000Z"
            }
            ,
            {
                "id": 13, "price_id": 3, "notes": "Party shoots", "created_at": "2023-04-17T22:18:07.000000Z", "updated_at": "2023-04-17T22:18:07.000000Z"
            }
        ])
    }, [])

    const options_reviews = {
        // margin: 30,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i className="fa-solid fa-chevron-left"></i>', '<i className="fa-solid fa-chevron-right"></i>'],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            }
        },
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>youhnaa magdy | home</title>
            </Helmet>
            <div
                className="elementor elementor-16 mt-2" data-elementor-id="16" data-elementor-type="wp-page">
                {/* main */}
                <section
                    className="elementor-section elementor-top-section elementor-element elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                    data-id="009edaf"
                    data-element_type="section">
                    <div className="elementor-container elementor-column-gap-no">
                        <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3c9edcb"
                            data-id="3c9edcb"
                            data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                    className="elementor-element elementor-element-dd9a4bc elementor-widget elementor-widget-wpo-loveme_about"
                                    data-id="dd9a4bc"
                                    data-element_type="widget"
                                    data-settings='{"title_shape":{"url":"http:\/\/wpocean.com\/wp\/loveme\/wp-content\/uploads\/2021\/10\/about-title-shape.png","id":372,"size":"","alt":"","source":"library"},"about_shape":{"url":"http:\/\/wpocean.com\/wp\/loveme\/wp-content\/uploads\/2021\/10\/about-shape.png","id":376,"size":"","alt":"","source":"library"},"about_image":{"url":"http:\/\/wpocean.com\/wp\/loveme\/wp-content\/uploads\/2021\/10\/about-1.png","id":374,"size":"","alt":"","source":"library"},"about_image2":{"url":"http:\/\/wpocean.com\/wp\/loveme\/wp-content\/uploads\/2021\/10\/about-2.png","id":375,"size":"","alt":"","source":"library"}}'
                                    data-widget_type="wpo-loveme_about.default" >
                                    <div className="elementor-widget-container">
                                        <div className="wpo-about-section">
                                            {slider.map((sliderElement, sliderIndex) => (
                                                <React.Fragment>
                                                    {sliderIndex === 0 ?
                                                        <OwlCarousel
                                                            className='owl-carousel  ' {...options_reviews} key={sliderIndex}
                                                            autoplay loop items='2' lazyLoad lazyContent nav dots={false} >
                                                            {slider.map((Element, index) => (
                                                                <div className='item' key={index}>
                                                                    <div className="container">
                                                                        <div className="row align-items-center">
                                                                            <div className="col-lg-5 col-md-12 col-12 pt-5 pb-5">
                                                                                <div className="wpo-about-wrap">
                                                                                    <div className="wpo-about-item">
                                                                                        <div className="wpo-about-img">
                                                                                            <img
                                                                                                decoding="async"
                                                                                                src={'/storage' + Element.image}
                                                                                                alt={Element.address}
                                                                                                title={Element.address}
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="about-single-item">
                                                                                        <div
                                                                                            className="wpo-about-item-s2 wow rollIn"
                                                                                            data-wow-duration="2s"
                                                                                            animateIn={'bounceInRight'}
                                                                                            style={{
                                                                                                visibility: "visible",
                                                                                                animationDuration: "5s",
                                                                                                animationName: "rollIn",
                                                                                                animationIterationCount: 'infinite',
                                                                                                // animationDelay:'5s',
                                                                                            }}>
                                                                                            <div className="wpo-about-img 00">
                                                                                                <img
                                                                                                    decoding="async"
                                                                                                    src={'/storage' + Element.image}
                                                                                                    alt={Element.address}
                                                                                                    title={Element.address}
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="ab-shape">
                                                                                        <img
                                                                                            decoding="async"
                                                                                            src="./images/IMG_20230416_210803_516.webp"
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-7 col-md-12 col-12">
                                                                                <div className="wpo-about-text">
                                                                                    <div className="wpo-about-icon">
                                                                                    </div>
                                                                                    <div className="wpo-about-icon-content">
                                                                                        <h2> {Element.address} </h2>
                                                                                        <p>
                                                                                            {Element.notes}
                                                                                        </p>
                                                                                        <div className="d-flex justify-content-center" style={{ marginRight: '30px' }}>
                                                                                            <NavLink to="/about" className="theme-btn-s3" >
                                                                                                More About
                                                                                            </NavLink>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </OwlCarousel> : null
                                                    }
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Wedding Ceremony */}
                <section
                    className="section-padding pt-3 elementor-section elementor-top-section elementor-element elementor-element-3883d4e elementor-section-full_width elementor-section-height-default elementor-section-height-default my-3"
                    data-id="3883d4e"
                    data-element_type="section">
                    <div className="elementor-container elementor-column-gap-no bg-section">
                        <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-18537e2"
                            data-id="18537e2"
                            data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                    className="elementor-element elementor-element-33eef22 elementor-widget elementor-widget-wpo-loveme_title"
                                    data-id="33eef22"
                                    data-element_type="widget"
                                    data-settings='{"shape_image":{"url":"http:\/\/wpocean.com\/wp\/loveme\/wp-content\/uploads\/2021\/10\/preloader.png","id":342,"size":"","alt":"","source":"library"}}'
                                    data-widget_type="wpo-loveme_title.default">
                                    <div className="elementor-widget-container mt-5">
                                        <div className="wpo-section-area">
                                            <div className="wpo-section-title">
                                                <h2>Every picture tells a story</h2>
                                                <div className="section-title-img">
                                                    <img
                                                        decoding="async"
                                                        src="./images/preloader.webp"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="elementor-element elementor-element-7c3f1ea elementor-widget elementor-widget-wpo-loveme_project"
                                    data-id="7c3f1ea"
                                    data-element_type="widget"
                                    data-widget_type="wpo-loveme_project.default">
                                    <div className="elementor-widget-container">
                                        <div className="wpo-portfolio-section">
                                            <div className="container-fluid">
                                                <div className="sortable-gallery">
                                                    <div className="gallery-filters"></div>
                                                    <div
                                                        className="portfolio-grids gallery-container clearfix">
                                                        <div className='row m-0'>
                                                            {portfolio.map((Element, index) => (
                                                                <React.Fragment key={index}>
                                                                    {index < 6 ?
                                                                        <div className="col-sm-6 col-md-3 col-lg-2 p-2" >
                                                                            <div className="wpo-about-item-s2 mb-2">
                                                                                <div className="wpo-about-img" >
                                                                                    <div className="bg-img-portfolio" style={{ backgroundImage: `url('storage${Element.image}')` }}></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        : null}
                                                                </React.Fragment>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-center mb-4">
                                                        <NavLink to="/portfolio" className="theme-btn-s3">
                                                            More portfolio
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* price */}
                <div className="eltdf-content elementor-2145 elementor elementor-1860">
                    <div className="eltdf-content-inner">
                        <div className="eltdf-full-width">
                            <div className="eltdf-grid-row">
                                <div className="eltdf-page-content-holder eltdf-grid-col-12">
                                    <div
                                        data-elementor-type="wp-page"
                                        data-elementor-id="2145"
                                        className="elementor elementor-2145">
                                        <div className="elementor-inner">
                                            <div className="elementor-section-wrap">

                                                <section
                                                    className="elementor-section elementor-top-section elementor-element elementor-element-17dcf967 eltdf-elementor-row-grid-section elementor-section-full_width elementor-section-height-default elementor-section-height-default eltdf-parallax-row-no eltdf-content-aligment-left eltdf-disabled-bg-image-bellow-no"
                                                    data-id="17dcf967"
                                                    data-element_type="section"
                                                    data-settings='{"background_background":"classic"}'
                                                >
                                                    <div
                                                        className="elementor-container elementor-column-gap-default"
                                                    >
                                                        <div className="elementor-row">
                                                            <div
                                                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-18bfd7dc"
                                                                data-id="18bfd7dc"
                                                                data-element_type="column"
                                                            >
                                                                <div
                                                                    className="elementor-column-wrap elementor-element-populated"
                                                                >
                                                                    <div className="elementor-widget-wrap">
                                                                        <div
                                                                            className="elementor-element elementor-element-6241c6c elementor-widget elementor-widget-eltdf_section_title"
                                                                            data-id="6241c6c"
                                                                            data-element_type="widget"
                                                                            data-widget_type="eltdf_section_title.default"
                                                                        >
                                                                            <div className="elementor-widget-container">
                                                                                <div
                                                                                    className="eltdf-section-title-holder eltdf-st-standard eltdf-st-with-dots eltdf-section-title-appeared"
                                                                                >
                                                                                    <div className="eltdf-st-inner">
                                                                                        <div
                                                                                            className="eltdf-st-image"
                                                                                        >
                                                                                            <img
                                                                                                width="55"
                                                                                                height="63"
                                                                                                src="./images/section-title-img-1.webp"
                                                                                                className="attachment-full size-full"
                                                                                                alt="a"
                                                                                                decoding="async"
                                                                                                loading="lazy"
                                                                                            />
                                                                                        </div>
                                                                                        <h2 className="eltdf-st-title">
                                                                                            <span
                                                                                                className="eltdf-st-title-word"
                                                                                            >
                                                                                            </span>
                                                                                            PACKAGES
                                                                                        </h2>
                                                                                        <span className="eltdf-st-text">
                                                                                            Choose Yours
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                                <section
                                                    className="elementor-section elementor-top-section elementor-element elementor-element-6927395b eltdf-elementor-row-grid-section elementor-section-boxed elementor-section-height-default elementor-section-height-default eltdf-parallax-row-no eltdf-content-aligment-left eltdf-disabled-bg-image-bellow-no"
                                                    data-id="6927395b"
                                                    data-element_type="section"
                                                >
                                                    <div
                                                        className="elementor-container elementor-column-gap-default"
                                                    >
                                                        <div className="elementor-row">
                                                            <div
                                                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-17a040e"
                                                                data-id="17a040e"
                                                                data-element_type="column"
                                                            >
                                                                <div
                                                                    className="elementor-column-wrap elementor-element-populated"
                                                                >
                                                                    <div className="elementor-widget-wrap">
                                                                        <div
                                                                            className="elementor-element elementor-element-38981656 elementor-widget elementor-widget-eltdf_pricing_table"
                                                                            data-id="38981656"
                                                                            data-element_type="widget"
                                                                            data-widget_type="eltdf_pricing_table.default"
                                                                        >
                                                                            <div className="elementor-widget-container">
                                                                                <div
                                                                                    className="eltdf-pricing-tables eltdf-grid-list eltdf-disable-bottom-space clearfix eltdf-three-columns eltdf-normal-space"
                                                                                >
                                                                                    <div
                                                                                        className="eltdf-pt-wrapper eltdf-outer-space row"
                                                                                    >
                                                                                        {price.map((Element, index) => (
                                                                                            <div
                                                                                                className="eltdf-price-table eltdf-item-space col-sm-12 col-md-4 " key={index}>
                                                                                                <div className="eltdf-pt-inner p-4 pb-1">
                                                                                                    <div className="img-price">
                                                                                                        <figure>
                                                                                                            <img
                                                                                                                src={'/storage' + Element.image} className="w-100" decoding="async"
                                                                                                                alt={Element.name}
                                                                                                                title={Element.name}
                                                                                                                loading="lazy" />
                                                                                                        </figure>
                                                                                                    </div>
                                                                                                    <div className='price-list'>
                                                                                                        <ul>
                                                                                                            <li
                                                                                                                className="eltdf-pt-title-holder">
                                                                                                                <span
                                                                                                                    className="eltdf-pt-title">
                                                                                                                    {Element.name}
                                                                                                                </span>
                                                                                                            </li>
                                                                                                            <div className="row m-0 align-items-center mt-3">
                                                                                                                <li
                                                                                                                    className="eltdf-pt-content col-7 pe-1">
                                                                                                                    {priceDescription.map((ElementDescription, indexDescription) => (
                                                                                                                        <React.Fragment key={indexDescription}>
                                                                                                                            {ElementDescription.price_id === Element.id ?
                                                                                                                                <React.Fragment>
                                                                                                                                    <ul >
                                                                                                                                        <li className="pe-0"> {ElementDescription.notes} </li>
                                                                                                                                    </ul>
                                                                                                                                </React.Fragment> : ''}
                                                                                                                        </React.Fragment>
                                                                                                                    ))}
                                                                                                                </li>
                                                                                                                <li
                                                                                                                    className="eltdf-pt-content col-5 pe-0">
                                                                                                                    <li className="eltdf-pt-prices">
                                                                                                                        <div className='d-flex justify-content-center align-items-end mt-3'>
                                                                                                                            {Element.discount * 1 !== 0 ?
                                                                                                                                <div className='offer-rate'>
                                                                                                                                    {Element.discount}%
                                                                                                                                </div>
                                                                                                                                : ''}
                                                                                                                            <span className="eltdf-pt-price">
                                                                                                                                {Element.price - (Element.price * Element.discount / 100)}
                                                                                                                                <sup className="eltdf-pt-value">
                                                                                                                                    LE
                                                                                                                                </sup>
                                                                                                                            </span>
                                                                                                                            {(Element.price - (Element.price * Element.discount / 100)) !== Element.price * 1 ?
                                                                                                                                <span className="eltdf-pt-price offer">
                                                                                                                                    {Element.price}
                                                                                                                                </span>
                                                                                                                                : ''}
                                                                                                                        </div>
                                                                                                                    </li>
                                                                                                                </li>
                                                                                                            </div>
                                                                                                        </ul>
                                                                                                        <div className=" me-2 ms-2">
                                                                                                            <p className='text-center p-2 mb-0 text pb-0'> plase check the notes show in the laste page</p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        ))}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* opein */}
                <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-d36058d elementor-section-full_width elementor-section-height-default elementor-section-height-default mt-5"
                    data-id="d36058d"
                    data-element_type="section">
                    <div className="elementor-container elementor-column-gap-no">
                        <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a7dfa16"
                            data-id="a7dfa16"
                            data-element_type="column"
                            data-settings='{"background_background":"classic"}'>
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                    className="elementor-element elementor-element-3a20ac9 elementor-widget elementor-widget-wpo-loveme_testimonial"
                                    data-id="3a20ac9"
                                    data-element_type="widget"
                                    data-settings='{"testi_shape":{"url":"http:\/\/wpocean.com\/wp\/loveme\/wp-content\/uploads\/2021\/10\/testi-shape.png","id":453,"size":"","alt":"","source":"library"},"testi_couple":{"url":"http:\/\/wpocean.com\/wp\/loveme\/wp-content\/uploads\/2021\/10\/test-thumb.webp","id":454,"size":"","alt":"","source":"library"},"testi_shape2":{"url":"http:\/\/wpocean.com\/wp\/loveme\/wp-content\/uploads\/2021\/10\/test-shape2.png","id":455,"size":"","alt":"","source":"library"}}'
                                    data-widget_type="wpo-loveme_testimonial.default">
                                    <div className="elementor-widget-container">
                                        <div className="wpo-testimonials-section">
                                            <div className="container">
                                                {client.map((clientElement, clientIndex) => (
                                                    <React.Fragment key={clientIndex}>
                                                        {clientIndex === 0 ?
                                                            <OwlCarousel
                                                                className='owl-carousel  ' {...options_reviews}
                                                                autoplay
                                                                loop
                                                                items='2'
                                                                lazyLoad lazyContent
                                                                nav dots={false}
                                                                animateIn={'bounceInRight'}
                                                                animateOut={'bounceOutLeft'}>
                                                                {client.map((Element, index) => (
                                                                    <div className='item' key={index}>
                                                                        <div className="row align-items-center">
                                                                            <div className="col-lg-4 col-12">
                                                                                <div className="wpo-testimonials-img">
                                                                                    <img
                                                                                        decoding="async"
                                                                                        // src="./images/test-thumb.webp"
                                                                                        src={'/storage' + Element.image}
                                                                                        alt={Element.name}
                                                                                        title={Element.name}
                                                                                    />
                                                                                    <div className="wpo-testimonials-img-shape">
                                                                                        <img
                                                                                            decoding="async"
                                                                                            src="./images/testi-shape.png"
                                                                                            //  src={api.api+'/storage' + Element.image}
                                                                                            alt={Element.name}
                                                                                            title={Element.name}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-8 col-12">
                                                                                <section
                                                                                    className="elementor-section elementor-top-section elementor-element elementor-element-11670ba eltdf-elementor-row-grid-section elementor-section-boxed elementor-section-height-default elementor-section-height-default eltdf-parallax-row-no eltdf-content-aligment-left eltdf-disabled-bg-image-bellow-no"
                                                                                    data-id="11670ba"
                                                                                    data-element_type="section"
                                                                                >
                                                                                    <div
                                                                                        className="elementor-container elementor-column-gap-default w-100"
                                                                                    >
                                                                                        <div className="elementor-row">
                                                                                            <div
                                                                                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8b786f1 w-100"
                                                                                                data-id="8b786f1"
                                                                                                data-element_type="column"
                                                                                            >
                                                                                                <div
                                                                                                    className="elementor-column-wrap elementor-element-populated"
                                                                                                >
                                                                                                    <div className="elementor-widget-wrap">
                                                                                                        <div
                                                                                                            className="elementor-element elementor-element-c77d5c4 elementor-widget elementor-widget-eltdf_section_title mt-3"
                                                                                                            data-id="c77d5c4"
                                                                                                            data-element_type="widget"
                                                                                                            data-widget_type="eltdf_section_title.default"
                                                                                                        >
                                                                                                            <div className="elementor-widget-container">
                                                                                                                <div
                                                                                                                    className="eltdf-section-title-holder eltdf-st-standard eltdf-section-title-appeared"

                                                                                                                >
                                                                                                                    <div className="eltdf-st-inner">
                                                                                                                        <div className="eltdf-st-image"></div>
                                                                                                                        <h2 className="eltdf-st-title">
                                                                                                                            <span
                                                                                                                                className="eltdf-st-title-word"
                                                                                                                            >
                                                                                                                                {Element.name}
                                                                                                                            </span>

                                                                                                                        </h2>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            className="elementor-element elementor-element-c3a48ac elementor-widget elementor-widget-text-editor"
                                                                                                            data-id="c3a48ac"
                                                                                                            data-element_type="widget"
                                                                                                            data-widget_type="text-editor.default"
                                                                                                        >
                                                                                                            <div className="elementor-widget-container">
                                                                                                                <div
                                                                                                                    className="elementor-text-editor elementor-clearfix"
                                                                                                                >
                                                                                                                    <p className="text-center">
                                                                                                                        {Element.notes}
                                                                                                                    </p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            className="elementor-element elementor-element-fa455bf elementor-widget elementor-widget-eltdf_single_image"
                                                                                                            data-id="fa455bf"
                                                                                                            data-element_type="widget"
                                                                                                            data-widget_type="eltdf_single_image.default"
                                                                                                        >
                                                                                                            <div className="elementor-widget-container">
                                                                                                                <div
                                                                                                                    className="eltdf-single-image-holder"
                                                                                                                >

                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </section>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </OwlCarousel>
                                                            : null}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                            <div className="wpo-testimonials-shape">
                                                <img
                                                    decoding="async"
                                                    src="./images/test-shape2.webp"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* MEET OUR PLANNERS 
                <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-d50615e elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                    data-id="d50615e"
                    data-element_type="section"
                >
                    <div className="elementor-container elementor-column-gap-no">
                        <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-07773cb"
                            data-id="07773cb"
                            data-element_type="column"
                        >
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                    className="elementor-element elementor-element-e120966 elementor-widget elementor-widget-wpo-loveme_title"
                                    data-id="e120966"
                                    data-element_type="widget"
                                    data-settings='{"shape_image":{"url":"http:\/\/wpocean.com\/wp\/loveme\/wp-content\/uploads\/2021\/10\/preloader.png","id":342,"size":"","alt":"","source":"library"}}'
                                    data-widget_type="wpo-loveme_title.default"
                                >
                                    <div className="elementor-widget-container">
                                        <div className="wpo-section-area">
                                            <div className="wpo-section-title">
                                                <span>Our Team</span>
                                                <h2> Team </h2>
                                                <div className="section-title-img">
                                                    <img
                                                        decoding="async"
                                                        src="./images/preloader.webp"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="elementor-element elementor-element-fad134c elementor-widget elementor-widget-wpo-loveme_team"
                                    data-id="fad134c"
                                    data-element_type="widget"
                                    data-widget_type="wpo-loveme_team.default"
                                >
                                    <div className="elementor-widget-container">
                                        <div className="wpo-team-section">
                                            <div className="container">
                                                <div className="wpo-team-wrap">
                                                    <div className="row">
                                                        {team.map((Element, index) => (
                                                            <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                                                <div className="wpo-team-item">
                                                                    <div className="wpo-team-img">
                                                                        <img
                                                                            decoding="async"
                                                                            src={ '/storage' + Element.image}
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <div className="wpo-team-text">
                                                                        <h3>
                                                                            <a href="#">
                                                                                {Element.name}
                                                                            </a>
                                                                        </h3>
                                                                        <span> {Element.job} </span>
                                                                        <ul>
                                                                            <li className="on">
                                                                                <a href="#">
                                                                                    <i className="flaticon-facebook-app-symbol"></i>
                                                                                </a>
                                                                            </li>
                                                                            <li className="on">
                                                                                <a href="#">
                                                                                    <i className="flaticon-twitter"></i>
                                                                                </a>
                                                                            </li>
                                                                            <li className="on">
                                                                                <a href="#">
                                                                                    <i className="flaticon-linkedin"></i>
                                                                                </a>
                                                                            </li>
                                                                            <li className="on">
                                                                                <a href="#">
                                                                                    <i className="flaticon-pinterest"></i>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>*/}
                {/* banner */}
                <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-adf73ea elementor-section-full_width elementor-section-height-default elementor-section-height-default mt-3"
                    data-id="adf73ea"
                    data-element_type="section"
                >
                    <div className="elementor-container elementor-column-gap-no">
                        <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-529472a"
                            data-id="529472a"
                            data-element_type="column"
                            data-settings='{"background_background":"classic"}'
                        >
                            <div className="elementor-widget-wrap elementor-element-populated contact-section">
                                <div className="elementor-background-overlay"></div>
                                <div
                                    className="elementor-element elementor-element-9be21ec elementor-widget elementor-widget-wpo-loveme_cta"
                                    data-id="9be21ec"
                                    data-element_type="widget"
                                    data-settings='{"cta_image":{"url":"http:\/\/wpocean.com\/wp\/loveme\/wp-content\/uploads\/2021\/10\/preloader.png","id":342,"size":"","alt":"","source":"library"}}'
                                    data-widget_type="wpo-loveme_cta.default"
                                >
                                    <div className="elementor-widget-container">
                                        <div className="wpo-cta-section">
                                            <div className="conatiner-fluid">
                                                <div className="wpo-cta-item">
                                                    <span>
                                                        <img
                                                            decoding="async"
                                                            src="./images/preloader.webp"
                                                            alt=""
                                                        />
                                                    </span>
                                                    <h2>Lets Celebrate Your Love</h2>
                                                    <NavLink to="/contact" className="theme-btn-s2">
                                                        Contact Us
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </React.Fragment>
    );
}

export default Home;
