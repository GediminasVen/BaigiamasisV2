import React, { useState } from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackAnimation from '../Home/BackAnimation';
import webdesign from './assets/web-design.svg';
import appdevelopment from './assets/app-development.svg';
import webdevelopment from './assets/web-development.svg';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: "none" }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: "none" }} onClick={onClick} />;
}

export default function ServiceSection() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const [expand, updateExpanded] = useState(false);
    const settings = { nextArrow: <SampleNextArrow />, prevArrow: <SamplePrevArrow /> };

    return (
        <section className='home-padd'>
            <Container fluid className='business-service-content' id='service'>
                <BackAnimation />
                <h4 className='section-title'>QA Services I Offer</h4>
                <Row className="justify-content-md-center">
                    <Col className='services-box-main'>
                        <Slider className='service-nav1' asNavFor={nav1} ref={(slider2) => setNav2(slider2)} slidesToShow={3} swipeToSlide={true} focusOnSelect={true} {...settings}>
                            <div>
                                <div className='web-app-service'>
                                    <Col className='service-title'>
                                        <Link className='service-link' as={Link} to="/" onClick={() => updateExpanded(false)}>
                                            <Col className='services-sub-title'>
                                                <Col className='d-flex align-items-center'>
                                                    <h3>Test <span className='d-block'>Automation</span></h3> <img className='service-icon' src={webdevelopment} style={{ height: "15vh" }} />
                                                </Col>
                                                <Col className='d-icon'>
                                                    <FaArrowRight size={18} color='bisque' />
                                                </Col>
                                            </Col>
                                        </Link>
                                    </Col>
                                </div>
                            </div>
                            <div>
                                <div className='mobile-app-service'>
                                    <Col className='service-title'>
                                        <Link className='service-link' as={Link} to="/" onClick={() => updateExpanded(false)}>
                                            <Col className='services-sub-title'>
                                                <Col className='d-flex align-items-center'>
                                                    <h3>Manual <span className='d-block'>Testing</span></h3> <img className='service-icon' src={appdevelopment} style={{ height: "15vh" }} />
                                                </Col>
                                                <Col className='d-icon'>
                                                    <FaArrowRight size={18} color='bisque' />
                                                </Col>
                                            </Col>
                                        </Link>
                                    </Col>
                                </div>
                            </div>
                            <div>
                                <div className='uiux-desing-service'>
                                    <Col className='service-title'>
                                        <Link className='service-link' as={Link} to="/" onClick={() => updateExpanded(false)}>
                                            <Col className='services-sub-title'>
                                                <Col className='d-flex align-items-center'>
                                                    <h3>API <span className='d-block'>Testing</span></h3> <img className='service-icon' src={webdesign} style={{ height: "15vh" }} />
                                                </Col>
                                                <Col className='d-icon'>
                                                    <FaArrowRight size={18} color='bisque' />
                                                </Col>
                                            </Col>
                                        </Link>
                                    </Col>
                                </div>
                            </div>
                            <div>
                                <div className='dev-ops-service'>
                                    <Col className='service-title'>
                                        <Link className='service-link' as={Link} to="/" onClick={() => updateExpanded(false)}>
                                            <Col className='services-sub-title'>
                                                <Col className='d-flex align-items-center'>
                                                    <h3>Performance <span className='d-block'>Testing</span></h3> <img className='service-icon' src={webdevelopment} style={{ height: "15vh" }} />
                                                </Col>
                                                <Col className='d-icon'>
                                                    <FaArrowRight size={18} color='bisque' />
                                                </Col>
                                            </Col>
                                        </Link>
                                    </Col>
                                </div>
                            </div>
                            <div>
                                <div className='crm-web-service'>
                                    <Col className='service-title'>
                                        <Link className='service-link' as={Link} to="/" onClick={() => updateExpanded(false)}>
                                            <Col className='services-sub-title'>
                                                <Col className='d-flex align-items-center'>
                                                    <h3>Mobile <span className='d-block'>QA</span></h3> <img className='service-icon' src={appdevelopment} style={{ height: "15vh" }} />
                                                </Col>
                                                <Col className='d-icon'>
                                                    <FaArrowRight size={18} color='bisque' />
                                                </Col>
                                            </Col>
                                        </Link>
                                    </Col>
                                </div>
                            </div>
                            <div>
                                <div className='data-science-service'>
                                    <Col className='service-title'>
                                        <Link className='service-link' as={Link} to="/" onClick={() => updateExpanded(false)}>
                                            <Col className='services-sub-title'>
                                                <Col className='d-flex align-items-center'>
                                                    <h3>CI/CD <span className='d-block'>Integration</span></h3> <img className='service-icon' src={webdesign} style={{ height: "15vh" }} />
                                                </Col>
                                                <Col className='d-icon'>
                                                    <FaArrowRight size={18} color='bisque' />
                                                </Col>
                                            </Col>
                                        </Link>
                                    </Col>
                                </div>
                            </div>
                        </Slider>

                        <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                            <div>
                                <Row className="justify-content-md-center">
                                    <Col md={8} className='service-slide-content'>
                                        <p>Automate functional, regression, and smoke tests using frameworks like Cypress, Playwright, and Selenium for fast and scalable testing.</p>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className="justify-content-md-center">
                                    <Col md={8} className='service-slide-content'>
                                        <p>Perform detailed manual testing to validate user flows, identify usability issues, and ensure business logic under real-world scenarios.</p>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className="justify-content-md-center">
                                    <Col md={8} className='service-slide-content'>
                                        <p>Ensure reliable backend communication through API contract testing, schema validation, and performance checks using Postman and RestAssured.</p>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className="justify-content-md-center">
                                    <Col md={8} className='service-slide-content'>
                                        <p>Simulate high loads and stress conditions using tools like JMeter and k6 to analyze performance, stability, and server limits.</p>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className="justify-content-md-center">
                                    <Col md={8} className='service-slide-content'>
                                        <p>Test mobile apps across platforms and devices using Appium, emulators, and manual testing to ensure cross-device consistency.</p>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className="justify-content-md-center">
                                    <Col md={8} className='service-slide-content'>
                                        <p>Automate testing in CI/CD pipelines with Jenkins, GitHub Actions, and GitLab to enforce quality gates and reduce release risk.</p>
                                    </Col>
                                </Row>
                            </div>
                        </Slider>
                    </Col>
                    <Col md={10} className='service-btn'>
                        <Link className='glow-on-hover btn btn-default btn-oval btn-xl' as={Link} to="/service" onClick={() => updateExpanded(false)}>
                            All QA Services <FaArrowRight size={12} color='bisque' />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
