import React, { useEffect, useState } from "react";
// Helmet
import { Helmet } from "react-helmet-async";
//const axios = require('axios'); // legacy way
import axios from 'axios';

function Contact(api) {
  const [companySetting, setCompanySetting] = useState([])

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

  return (
    <React.Fragment>
      <Helmet>
        <title>youhnaa magdy | contact</title>
      </Helmet>
      <div className="eltdf-content">
        <div className="eltdf-content-inner">
          <div className="eltdf-container eltdf-default-page-template">
            <div className="eltdf-container-inner clearfix pb-0">
              <div className="eltdf-grid-row">
                <div className="eltdf-page-content-holder eltdf-grid-col-12">
                  <div
                    data-elementor-type="wp-page"
                    data-elementor-id="2409"
                    className="elementor elementor-2409"
                  >
                    <div className="elementor-inner">
                      <div className="elementor-section-wrap">
                        <section
                          className="elementor-section elementor-top-section elementor-element elementor-element-744fae56 elementor-section-full_width elementor-section-height-default elementor-section-height-default eltdf-parallax-row-no eltdf-content-aligment-left eltdf-elementor-row-grid-no eltdf-disabled-bg-image-bellow-no"
                          data-id="744fae56"
                          data-element_type="section"
                        >

                        </section>
                        <section
                          className="elementor-section elementor-top-section elementor-element elementor-element-4bc47306 eltdf-elementor-row-grid-section elementor-section-boxed elementor-section-height-default elementor-section-height-default eltdf-parallax-row-no eltdf-content-aligment-left eltdf-disabled-bg-image-bellow-no"
                          data-id="4bc47306"
                          data-element_type="section"
                        >
                          <div
                            className="elementor-container elementor-column-gap-default"
                          >
                            <div className="elementor-row">
                              <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-41f7cfe1"
                                data-id="41f7cfe1"
                                data-element_type="column"
                              >
                                <div
                                  className="elementor-column-wrap elementor-element-populated"
                                >
                                  <div className="elementor-widget-wrap">
                                    <div
                                      className="elementor-element elementor-element-6119a142 elementor-widget elementor-widget-eltdf_section_title"
                                      data-id="6119a142"
                                      data-element_type="widget"
                                      data-widget_type="eltdf_section_title.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div
                                          className="eltdf-section-title-holder eltdf-st-standard eltdf-section-title-appeared"
                                          style={{ textAlign: "left" }}
                                        >
                                          <div className="eltdf-st-inner">
                                            <div
                                              className="eltdf-st-image mb-0"

                                            ></div>
                                            <h2 className="eltdf-st-title">
                                              <span
                                                className="eltdf-st-title-word"
                                              >
                                                WE’RE
                                              </span>
                                              <span
                                                className="eltdf-st-title-word"
                                              >
                                                GETTING
                                              </span>
                                              <span
                                                className="eltdf-st-title-word"
                                              >
                                                MARRIED!
                                              </span>
                                            </h2>
                                            <span
                                              className="eltdf-st-text mt-3">
                                              {companySetting.map((Element, index) => (
                                                <React.Fragment key={index}>
                                                  <p>
                                                    {Element.notes}
                                                  </p>
                                                </React.Fragment>
                                              ))}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <section
                                      className="elementor-section elementor-inner-section elementor-element elementor-element-4a1ef6d6 elementor-section-boxed elementor-section-height-default elementor-section-height-default eltdf-parallax-row-no eltdf-content-aligment-left eltdf-elementor-row-grid-no eltdf-disabled-bg-image-bellow-no"
                                      data-id="4a1ef6d6"
                                      data-element_type="section"
                                    >
                                      <div
                                        className="elementor-container elementor-column-gap-default w-100"
                                      >
                                        <div className="elementor-row">
                                          <div
                                            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1593c439"
                                            data-id="1593c439"
                                            data-element_type="column"
                                          >
                                            <div
                                              className="elementor-column-wrap elementor-element-populated"
                                            >
                                              <div
                                                className="elementor-widget-wrap"
                                              >
                                                <div
                                                  className="elementor-element elementor-element-3c08091b elementor-widget elementor-widget-text-editor mb-1"
                                                  data-id="3c08091b"
                                                  data-element_type="widget"
                                                  data-widget_type="text-editor.default"
                                                >
                                                  <div
                                                    className="elementor-widget-container"
                                                  >
                                                    <div
                                                      className="elementor-text-editor elementor-clearfix"
                                                    >
                                                      <h3 className='mb-2 mt-0' >
                                                        Contact us
                                                      </h3>
                                                    </div>
                                                  </div>
                                                </div>

                                                {companySetting.map((Element, index) => (
                                                  <React.Fragment key={index}>
                                                    <div
                                                      className="elementor-element elementor-element-7987dd35 elementor-widget elementor-widget-eltdf_icon_with_text"
                                                      data-id="7987dd35"
                                                      data-element_type="widget"
                                                      data-widget_type="eltdf_icon_with_text.default"
                                                    >
                                                      <div
                                                        className="elementor-widget-container"
                                                      >
                                                        <div
                                                          className="eltdf-iwt clearfix eltdf-iwt-icon-left eltdf-iwt-icon-medium mb-1"
                                                        >
                                                          <div
                                                            className="eltdf-iwt-icon"
                                                          >
                                                            <a
                                                              itemProp="url"
                                                              href="mailto:%20theaisle@qodeinteractive.com"
                                                              target="_self"
                                                            >
                                                              <span
                                                                className="eltdf-icon-shortcode eltdf-normal eltdf-icon-medium"
                                                                data-color="#CE8F6F"
                                                              >
                                                                <i
                                                                  className="flaticon-facebook-app-symbol eltdf-icon-element"
                                                                  style={{ color: '#ce8f6f', fontSize: '25px' }}
                                                                ></i>
                                                              </span>
                                                            </a>
                                                          </div>
                                                          <div
                                                            className="eltdf-iwt-content"
                                                          >
                                                            <p
                                                              className="eltdf-iwt-title"
                                                              style={{ marginTop: ' -6px' }}
                                                            >
                                                              <a
                                                                itemProp="url"
                                                                href="https://www.facebook.com/Youhannamagdy12?mibextid=ZbWKwL"
                                                                target="_blank" rel="noreferrer"
                                                                aria-label="facebook"
                                                              >
                                                                <span
                                                                  className="eltdf-iwt-title-text"
                                                                >
                                                                  Youhanna magdy photography
                                                                </span>
                                                              </a>
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div
                                                      className="elementor-element elementor-element-7987dd35 elementor-widget elementor-widget-eltdf_icon_with_text"
                                                      data-id="7987dd35"
                                                      data-element_type="widget"
                                                      data-widget_type="eltdf_icon_with_text.default"
                                                    >
                                                      <div
                                                        className="elementor-widget-container"
                                                      >
                                                        <div
                                                          className="eltdf-iwt clearfix eltdf-iwt-icon-left eltdf-iwt-icon-medium mb-1"
                                                        >
                                                          <div
                                                            className="eltdf-iwt-icon"
                                                          >
                                                            <a
                                                              itemProp="url"
                                                              href="mailto:%20theaisle@qodeinteractive.com"
                                                              target="_self"
                                                            >
                                                              <span
                                                                className="eltdf-icon-shortcode eltdf-normal eltdf-icon-medium"
                                                                data-color="#CE8F6F"
                                                              >
                                                                <i
                                                                  className="flaticon-instagram eltdf-icon-element"
                                                                  style={{ color: '#ce8f6f', fontSize: '25px' }}
                                                                ></i>
                                                              </span>
                                                            </a>
                                                          </div>
                                                          <div
                                                            className="eltdf-iwt-content"
                                                          >
                                                            <p
                                                              className="eltdf-iwt-title"
                                                              style={{ marginTop: ' -6px' }}
                                                            >
                                                              <a
                                                                itemProp="url"
                                                                href="https://www.instagram.com/youhannamagdyphotography/?igshid=ZDdkNTZiNTM="
                                                                target="_blank" rel="noreferrer"
                                                                aria-label="instagram"
                                                              >
                                                                <span
                                                                  className="eltdf-iwt-title-text"
                                                                >
                                                                  youhannamagdyphotography
                                                                </span>
                                                              </a>
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div
                                                      className="elementor-element elementor-element-7987dd35 elementor-widget elementor-widget-eltdf_icon_with_text"
                                                      data-id="7987dd35"
                                                      data-element_type="widget"
                                                      data-widget_type="eltdf_icon_with_text.default"
                                                    >
                                                      <div
                                                        className="elementor-widget-container"
                                                      >
                                                        <div
                                                          className="eltdf-iwt clearfix eltdf-iwt-icon-left eltdf-iwt-icon-medium mb-1"
                                                        >
                                                          <div
                                                            className="eltdf-iwt-icon"
                                                          >
                                                            <a
                                                              itemProp="url"
                                                              href="mailto:%20theaisle@qodeinteractive.com"
                                                              target="_self"
                                                            >
                                                              <span
                                                                className="eltdf-icon-shortcode eltdf-normal eltdf-icon-medium"
                                                                data-color="#CE8F6F"
                                                              >
                                                                <i
                                                                  className="flaticon-email eltdf-icon-element"
                                                                  style={{ color: '#ce8f6f', fontSize: '25px' }}
                                                                ></i>
                                                              </span>
                                                            </a>
                                                          </div>
                                                          <div
                                                            className="eltdf-iwt-content"
                                                          >
                                                            <p
                                                              className="eltdf-iwt-title"
                                                              style={{ marginTop: ' -6px' }}
                                                            >
                                                              <a
                                                                itemProp="url"
                                                                href={"mailto:" + Element.email}
                                                                target="_self"
                                                              >
                                                                <span
                                                                  className="eltdf-iwt-title-text"
                                                                >
                                                                  {Element.email}
                                                                </span>
                                                              </a>
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div
                                                      className="elementor-element elementor-element-131460e0 elementor-widget elementor-widget-eltdf_icon_with_text"
                                                      data-id="131460e0"
                                                      data-element_type="widget"
                                                      data-widget_type="eltdf_icon_with_text.default"
                                                    >
                                                      <div
                                                        className="elementor-widget-container"
                                                      >
                                                        <div
                                                          className="eltdf-iwt clearfix eltdf-iwt-icon-left eltdf-iwt-icon-medium mb-1"
                                                        >
                                                          <div
                                                            className="eltdf-iwt-icon"
                                                          >
                                                            <a
                                                              itemProp="url"
                                                              href={"tel:" + Element.tel}
                                                              target="_self"
                                                            >
                                                              <span
                                                                className="eltdf-icon-shortcode eltdf-normal eltdf-icon-medium"
                                                                data-color="#CE8F6F"
                                                              >
                                                                <i
                                                                  className="flaticon-phone-call eltdf-icon-element"
                                                                  style={{
                                                                    color: '#ce8f6f',
                                                                    fontSize: '25px'
                                                                  }}
                                                                ></i>
                                                              </span>
                                                            </a>
                                                          </div>
                                                          <div
                                                            className="eltdf-iwt-content"
                                                          >
                                                            <p
                                                              className="eltdf-iwt-title"
                                                              style={{ marginTop: '-6px' }}
                                                            >
                                                              <a
                                                                itemProp="url"
                                                                href={"tel:" + Element.tel}
                                                                target="_self"
                                                              >
                                                                <span
                                                                  className="eltdf-iwt-title-text"
                                                                > {Element.tel}
                                                                </span>
                                                              </a>
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    {/* <div
                                                      className="elementor-element elementor-element-2234bf9 elementor-widget elementor-widget-eltdf_icon_with_text"
                                                      data-id="2234bf9"
                                                      data-element_type="widget"
                                                      data-widget_type="eltdf_icon_with_text.default"
                                                    >
                                                      <div
                                                        className="elementor-widget-container"
                                                      >
                                                        <div
                                                          className="eltdf-iwt clearfix eltdf-iwt-icon-left eltdf-iwt-icon-medium mb-1"
                                                        >
                                                          <div
                                                            className="eltdf-iwt-icon"
                                                          >
                                                            <a
                                                              itemProp="url"
                                                              href="https://www.google.rs/maps/place/53-73+65th+Pl,+Flushing,+NY+11378,+USA/@40.7292132,-73.9021282,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25ef1ef83616d:0xafeb343696c9cc18!8m2!3d40.7292132!4d-73.8999395"
                                                              target="_blank" rel="noreferrer"
                                                            >
                                                              <span
                                                                className="eltdf-icon-shortcode eltdf-normal eltdf-icon-medium"
                                                                data-color="#CE8F6F"
                                                              >
                                                                <i
                                                                  className="flaticon-maps-and-flags eltdf-icon-element"
                                                                  style={{ color: '#ce8f6f', fontSize: '25px' }}
                                                                ></i>
                                                              </span>
                                                            </a>
                                                          </div>
                                                          <div
                                                            className="eltdf-iwt-content"
                                                          >
                                                            <p
                                                              className="eltdf-iwt-title"
                                                              style={{ marginTop: '-3px' }}
                                                            >
                                                              <a
                                                                href={Element.links}
                                                                target="_blank" rel="noreferrer"
                                                              >
                                                                <span
                                                                  className="eltdf-iwt-title-text"
                                                                > {Element.address}
                                                                </span>
                                                              </a>
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                                </div> */}
                                                  </React.Fragment>
                                                ))}
                                              </div>
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                    </section>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2e08e9fb"
                                data-id="2e08e9fb"
                                data-element_type="column"
                              >
                                <div
                                  className="elementor-column-wrap elementor-element-populated"
                                >
                                  <div className="elementor-widget-wrap">
                                    <div
                                      className="elementor-element elementor-element-5a4ad0c5 elementor-widget elementor-widget-wp-widget-eltdf_contact_form_7_widget"
                                      data-id="5a4ad0c5"
                                      data-element_type="widget"
                                      data-widget_type="wp-widget-eltdf_contact_form_7_widget.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div
                                          className="widget eltdf-contact-form-7-widget"
                                        >
                                          <div
                                            className="wpcf7 js"
                                            id="wpcf7-f641-p2409-o1"
                                            lang="en-US"
                                            dir="ltr"
                                          >
                                            <div
                                              className="screen-reader-response"
                                            >
                                              <p
                                                role="status"
                                                aria-live="polite"
                                                aria-atomic="true"
                                              ></p>
                                              <ul></ul>
                                            </div>
                                            <form
                                              action="https://theaisle.qodeinteractive.com/elementor/contact-us/#wpcf7-f641-p2409-o1"
                                              method="post"
                                              className="wpcf7-form init cf7_custom_style_2"
                                              aria-label="Contact form"
                                              novalidate="novalidate"
                                              data-status="init"
                                            >

                                              <div
                                                className="custom-contact-form"
                                              >
                                                <span
                                                  className="wpcf7-form-control-wrap"
                                                  data-name="your-name"
                                                >
                                                  <input
                                                    size="40"
                                                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                    aria-required="true"
                                                    aria-invalid="false"
                                                    placeholder="Name*"
                                                    value=""
                                                    type="text"
                                                    name="your-name"
                                                  />
                                                </span>
                                                <span
                                                  className="wpcf7-form-control-wrap"
                                                  data-name="your-email"
                                                >
                                                  <input
                                                    size="40"
                                                    className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                    aria-required="true"
                                                    aria-invalid="false"
                                                    placeholder="e-mail*"
                                                    value=""
                                                    type="email"
                                                    name="your-email"
                                                  />
                                                </span>
                                                <span
                                                  className="wpcf7-form-control-wrap"
                                                  data-name="your-message"
                                                >
                                                  <textarea
                                                    cols="40"
                                                    rows="3"
                                                    className="wpcf7-form-control wpcf7-textarea"
                                                    aria-invalid="false"
                                                    placeholder="Message"
                                                    name="your-message"
                                                  ></textarea>
                                                </span>
                                                <div className="d-flex justify-content-center" >
                                                  <button
                                                    className="wpcf7-form-control wpcf7-submit eltdf-btn eltdf-btn-medium eltdf-btn-solid"
                                                    type="submit"
                                                  >
                                                    <span
                                                      className="eltdf-btn-text"
                                                    >
                                                      Contact us
                                                    </span>
                                                    <span
                                                      className="eltdf-btn-line eltdf-btn-line-top"
                                                    ></span>
                                                    <span
                                                      className="eltdf-btn-line eltdf-btn-line-right"
                                                    ></span>
                                                    <span
                                                      className="eltdf-btn-line eltdf-btn-line-bottom"
                                                    ></span>
                                                    <span
                                                      className="eltdf-btn-line eltdf-btn-line-left"
                                                    ></span>
                                                  </button>
                                                </div>
                                              </div>
                                              <div
                                                className="wpcf7-response-output"
                                                aria-hidden="true"
                                              ></div>
                                            </form>
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
      </div>
    </React.Fragment>
  )
}

export default Contact
