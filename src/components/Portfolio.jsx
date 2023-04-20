import React, { useEffect, useState } from "react";
//const axios = require('axios'); // legacy way
import axios from 'axios';

import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.js';

function Portfolio(api) {
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    // Portfolio
    // axios.get(`${api.api}/api/Portfolio`)
    //   .then(function (response) {
    //     // handle success
    //     setPortfolio(response.data)
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    setPortfolio(
      [{
        "id": 10, "main_address": "american garden halls", "image": "admin@gmail.com\/bq6UAL1vS82ZlqArnj6ZaitNZsYSTZvDe9gENWTt.jpg", "category":
          "Mina & Mariam", "date": "2023-02-01", "created_at": "2023-04-17T22:31:07.000000Z", "updated_at": "2023-04-17T22:31:07.000000Z"
      },
      {
        "id": 11, "main_address": "american garden halls", "image": "admin@gmail.com\/2irHvMzIpA1MKmjn2fHwVUxFGVzTw53Gf2jxwlp7.jpg",
        "category": "Mina & Mariam", "date": "2023-02-01", "created_at": "2023-04-17T22:31:29.000000Z", "updated_at": "2023-04-17T22:31:29.000000Z"
      },
      {
        "id": 12, "main_address": "american garden halls", "image": "admin@gmail.com\/Tuj3Yx0HII3FyJrMePW9dimFqZbrCGW7zFV4YdII.jpg", "category": "Mina & Mariam",
        "date": "2023-02-01", "created_at": "2023-04-17T22:31:42.000000Z", "updated_at": "2023-04-17T22:31:42.000000Z"
      }, {
        "id": 13, "main_address": "american garden halls",
        "image": "admin@gmail.com\/1Q3na6qQYa2VG7ChcMR6q89y6rGkdIYfzPtxeBV6.jpg", "category": "Mina & Mariam", "date":
          "2023-02-01", "created_at": "2023-04-17T22:31:57.000000Z", "updated_at": "2023-04-17T22:31:57.000000Z"
      }, {
        "id": 14,
        "main_address": "american garden halls", "image": "admin@gmail.com\/e6rhP9bLw5Hp4e2cuRBOfixngZjUptEehNU3npn8.jpg", "category":
          "Mina & Mariam", "date": "2023-02-18", "created_at": "2023-04-17T22:32:18.000000Z", "updated_at": "2023-04-17T22:32:18.000000Z"
      },
      {
        "id": 15, "main_address": "american garden halls", "image": "admin@gmail.com\/MrLKA6mRB320u1RGXfUmvn0nS3vwILw5H5ML4j8Z.jpg",
        "category": "Mina & Mariam", "date": "2023-02-01", "created_at": "2023-04-17T22:32:37.000000Z", "updated_at": "2023-04-17T22:32:37.000000Z"
      },
      {
        "id": 16, "main_address": "american garden halls", "image": "admin@gmail.com\/bTiZesbFlkOdWWD03VUqQwKruE5boOReUfJPDFdu.jpg", "category": "Mina & Mariam",
        "date": "2023-02-01", "created_at": "2023-04-17T22:32:50.000000Z", "updated_at": "2023-04-17T22:32:50.000000Z"
      }, {
        "id": 17, "main_address": "american garden halls",
        "image": "admin@gmail.com\/NurS9fkwdZkSQHA7TFhFvimXVGSVPG9xxHvS4GGX.jpg", "category": "Mina & Mariam", "date": "2023-02-01",
        "created_at": "2023-04-17T22:33:00.000000Z", "updated_at": "2023-04-17T22:33:00.000000Z"
      }, {
        "id": 18, "main_address": "american garden halls",
        "image": "admin@gmail.com\/2NhLotdflxk7MgoLa9zAkNl49o6ewRd1HwKyT4yw.jpg", "category": "Mina & Mariam", "date": "2023-02-01", "created_at": "2023-04-17T22:33:16.000000Z", "updated_at": "2023-04-17T22:33:16.000000Z"
      }, {
        "id": 19, "main_address": "american garden halls",
        "image": "admin@gmail.com\/emD65nonXdWxcvU8mNzIsHe1MD1FuXkEjH4mfFHz.jpg", "category": "Mina & Mariam", "date": "2023-04-01",
        "created_at": "2023-04-17T22:33:29.000000Z", "updated_at": "2023-04-17T22:33:29.000000Z"
      }, {
        "id": 20, "main_address": "american garden halls",
        "image": "admin@gmail.com\/xabQoD20EaIVMWJgyNLAiKUFSaHPB5odd3Nqw1D7.jpg", "category": "Mina & Mariam", "date": "2023-04-01", "created_at":
          "2023-04-17T22:34:56.000000Z", "updated_at": "2023-04-17T22:34:56.000000Z"
      }, {
        "id": 21, "main_address": "daba"
        , "image": "admin@gmail.com\/WvQIjeIVHfUyMTOw6ieQDReLU9lPOxaX3RzqvGJH.jpg", "category": "Andrew & Mariam", "date":
          "2023-03-20", "created_at": "2023-04-17T22:35:14.000000Z", "updated_at": "2023-04-17T22:35:14.000000Z"
      }, { "id": 22, "main_address": "daba", "image": "admin@gmail.com\/hv2XJ4MMLMKbLYf9IaUrE8qK8bgAyhSXrnP7gWv3.jpg", "category": "Andrew & Mariam", "date": "2023-03-20", "created_at": "2023-04-17T22:35:28.000000Z", "updated_at": "2023-04-17T22:35:28.000000Z" }, { "id": 23, "main_address": "florenta location", "image": "admin@gmail.com\/WwR6Cb47gDn4vJ4SfjQyWj7FqrSTBja1f3VJvhxR.jpg", "category": "wassiem & eva", "date": "2023-02-03", "created_at": "2023-04-17T22:36:29.000000Z", "updated_at": "2023-04-17T22:36:29.000000Z" }, { "id": 24, "main_address": "florenta location", "image": "admin@gmail.com\/OzR48daoKPGWRSIzcufK9B1pTa3OzRBfovcs3Rv0.jpg", "category": "wassiem & eva", "date": "2023-02-03", "created_at": "2023-04-17T22:36:44.000000Z", "updated_at": "2023-04-17T22:36:44.000000Z" }, { "id": 25, "main_address": "florenta location", "image": "admin@gmail.com\/DwTUuD6Bzpdu8S4w5ZwOE6hiPLz460ZytHFBczC1.jpg", "category": "wassiem & eva", "date": "2023-02-03", "created_at": "2023-04-17T22:37:00.000000Z", "updated_at": "2023-04-17T22:37:00.000000Z" }, { "id": 26, "main_address": "florenta location", "image": "admin@gmail.com\/u05lGMcFigWa1bxtLgrhDe0RURnqBMnreIccRSIN.jpg", "category": "wassiem & eva", "date": "2023-02-03", "created_at": "2023-04-17T22:37:18.000000Z", "updated_at": "2023-04-17T22:37:18.000000Z" }, { "id": 27, "main_address": "florenta location", "image": "admin@gmail.com\/8xLICFlZO0srLk8krl55t9CSpitbp3b2AISsLYLi.jpg", "category": "wassiem & eva", "date": "2023-02-03", "created_at": "2023-04-17T22:37:34.000000Z", "updated_at": "2023-04-17T22:37:34.000000Z" }, { "id": 28, "main_address": "florenta location", "image": "admin@gmail.com\/IMCtFe2OZNYvpyqDiaeS6iz51goLZk1II9RtBEdZ.jpg", "category": "wassiem & eva", "date": "2023-02-03", "created_at": "2023-04-17T22:37:47.000000Z", "updated_at": "2023-04-17T22:37:47.000000Z" }, { "id": 29, "main_address": "florenta location", "image": "admin@gmail.com\/5R8cRqv30y0leE5iLzD2lUFDCpN3oc4cKvAWsAfJ.jpg", "category": "wassiem & eva", "date": "2023-02-03", "created_at": "2023-04-17T22:38:11.000000Z", "updated_at": "2023-04-17T22:38:11.000000Z" }, { "id": 30, "main_address": "florenta location", "image": "admin@gmail.com\/RJpItLrcabYJQQ0dL2F4N5i8KEeIns4kHCwRhcTz.jpg", "category": "mikhael & marina", "date": "2023-01-01", "created_at": "2023-04-17T22:39:11.000000Z", "updated_at": "2023-04-17T22:39:11.000000Z" }]
    )
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
                                  href={ '/storage/app/public/' + Element.image} alt={Element.title}>
                                  <div className="grid w-100 ps-0 pe-0">
                                    <div className="img-holder">
                                      <img src={ '/storage/app/public/' + Element.image} alt={Element.title} title={Element.title} decoding="async" className="img img-responsive" />
                                      <div className="hover-content">
                                        <h4>
                                          <a href="https://wpocean.com/wp/loveme/project/rose-harry/">
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