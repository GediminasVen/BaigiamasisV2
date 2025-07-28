import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
import BackAnimation from '../Home/BackAnimation';
import SocialLists from './SocialLists';
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";



export default function ContactUs() {
    const [expand, updateExpanded] = useState(false);

    function getFormData(e) {
        e.prenentDefault()
    }

    return (
        <section>
            <Container fluid className="news-section" id="news">
                <BackAnimation />
                <h4 className='section-title'>connect with me</h4>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col md={12} className='news-section-contant'>
                        <Row style={{ justifyContent: "center" }}>
                            <Col md={4} className="news-content-title">
                                <div className='news-contact-info'>
                                    <Col className='email'>
                                        <span><MdEmail size={32} /> <a href="mailto:venslovaitisgediminas@gmail.com" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                                            venslovaitisgediminas@gmail.com
                                        </a></span>
                                    </Col>
                                    <Col className='phone'>
                                        <span><MdCall size={32} />
                                            +37060000001
                                        </span>
                                    </Col>
                                    <Col className='phone'>
                                        <span><MdCall size={32} />
                                            +37060000002
                                        </span>
                                    </Col>
                                    <Col className='contact-social'>
                                        <Row className="social">
                                            <Col className='social-list'>
                                                <h4>Get In Touch</h4>
                                                <SocialLists />
                                            </Col>
                                        </Row>
                                    </Col>
                                </div>
                            </Col>
                            <Col md={4} className="news-content-field">
                                <h4>Send me a message</h4>
                                <Form onSubmit={getFormData}>
                                    <Form.Group className="mb-3" controlId="contactname">
                                        <Form.Control type="text" placeholder="Your Name*" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="contactemail">
                                        <Form.Control type="text" placeholder="Work Email* [name@example.com]" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="contactph">
                                        <Form.Control type="text" placeholder="Mobile Number*" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="contactcpmpany">
                                        <Form.Control type="text" placeholder="Company Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="contactcpmpany">
                                        <Form.Control className="msg" as="textarea" rows={3} placeholder="Your Message / requirements" />
                                    </Form.Group>
                                    <Link className='glow-on-hover btn btn-default btn-oval btn-xl' as={Link} to="" onClick={() => updateExpanded(false)}>Send Message  <FaArrowRight size={12} color='bisque' /></Link>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}