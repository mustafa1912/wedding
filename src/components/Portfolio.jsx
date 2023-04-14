import React, { useEffect, useState } from "react";
//const axios = require('axios'); // legacy way
import axios from 'axios';

import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.js';

const images = [
  { href: './images/photography/300464786_585981659689603_5752722730765849580_n.jpg', title: 'Image 1', date: ' Feb 2019  ' },
  { href: './images/photography/321723276_1894356890955987_7026473731403773723_n.jpg', title: 'Image 2', date: ' Feb 2020  ' },
];

function Portfolio(api) {
  const [portfolio, setPortfolio] = useState([])

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
  }, [])
  return (
    <div
      className="elementor elementor-16 mt-2" data-elementor-id="16" data-elementor-type="wp-page">

      {/* Wedding Ceremony */}
      <section
        className="section-padding pt-3 mb-3 elementor-section elementor-top-section elementor-element elementor-element-3883d4e elementor-section-full_width elementor-section-height-default elementor-section-height-default"
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
                data-settings='{"shape_image":{"url":"http:\/\/wpocean.com\/wp\/loveme\/wp-content\/uploads\/2021\/10\/section-title.png","id":342,"size":"","alt":"","source":"library"}}'
                data-widget_type="wpo-loveme_title.default">
                <div className="elementor-widget-container mt-5">
                  <div className="wpo-section-area">
                    <div className="wpo-section-title">
                      <span>Wedding Ceremony</span>
                      <h2>Celebrating Your Love</h2>
                      <div className="section-title-img">
                        <img
                          decoding="async"
                          src="./images/section-title.png"
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
                data-widget_type="wpo-loveme_project.default"
              >
                <div className="elementor-widget-container">
                  <div className="wpo-portfolio-section">
                    <div className="container-fluid">
                      <div className="sortable-gallery">
                        <div className="gallery-filters"></div>
                        <div
                          className="portfolio-grids gallery-container clearfix">
                          <div className='row pe-2 ps-2'>
                            {portfolio.map((Element, index) => (
                              <div className='col-sm-6 col-md-3 col-lg-2 p-2' key={index}>
                                <a data-fancybox="gallery"
                                  data-caption={Element.category}
                                  href={Element.href}>
                                  <div className="grid w-100 ps-0 pe-0">
                                    <div className="img-holder">
                                      <img src={api.api + '/storage/app/public/' + Element.image} alt={Element.title} title={Element.title} decoding="async" className="img img-responsive" />
                                      <div className="hover-content">
                                        <h4>
                                          <a href="#">
                                            {Element.main_address}
                                          </a>
                                        </h4>
                                        <span>{Element.date}</span>
                                      </div>
                                    </div>
                                  </div>
                                </a>
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
        </div>
      </section>
    </div>
  )
}

export default Portfolio