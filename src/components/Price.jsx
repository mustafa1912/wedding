import React, { useEffect, useState } from "react";
//const axios = require('axios'); // legacy way
import axios from 'axios';
import { Helmet } from "react-helmet-async";

function Price(api) {
    const [price, setPrice] = useState([])
    const [priceDescription, setPriceDescription] = useState([])
    useEffect(() => {
        // price
        axios.get(`${api.api}/api/Price`)
            .then(function (response) {
                // handle success
                setPrice(response.data)
                console.log(price)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        // setPriceDescription
        axios.get(`${api.api}/api/description`)
            .then(function (response) {
                // handle success
                setPriceDescription(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    return (
        <React.Fragment>
            <Helmet>
                <title>youhnaa magdy | packages</title>
            </Helmet>
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
                                                                                                            src={api.api + '/storage/app/public/' + Element.image} className="w-100" decoding="async"
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
                                                                                                        <div className="row m-0 align-items-end mt-3">
                                                                                                            <li
                                                                                                                className="eltdf-pt-content col-7 pe-1">
                                                                                                                {priceDescription.map((ElementDescription, indexDescription) => (
                                                                                                                    <React.Fragment key={indexDescription}>
                                                                                                                        {ElementDescription.price_id * 1 === Element.id * 1 ?
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
                                                                                                                    <div className='d-flex justify-content-start align-items-end mt-3'>
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
                                                                                                        <p className='text-center p-2 mb-0 text pb-0'>please check the notes show in the last page</p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    ))}
                                                                                    <div
                                                                                        className="eltdf-price-table eltdf-item-space col-sm-12 col-md-4 " >
                                                                                        <div className="eltdf-pt-inner">
                                                                                            <div className="">
                                                                                                <figure>
                                                                                                    <img
                                                                                                        src="./images/notes.jpg" className="mt-2 w-100" alt="notes" title='notes' decoding="async"
                                                                                                        loading="lazy" />
                                                                                                </figure>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
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
        </React.Fragment>
    )
}

export default Price