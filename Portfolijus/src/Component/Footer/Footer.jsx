import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { FaStar } from 'react-icons/fa';



function Footer() {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <Container fluid className="footer" id="footer">
            
            <Col>
                <Row className="footercopy">
                    
                    <Col md={4} className="footer-copywright">
                        <span className="text-copy">Copyright © {year} <a href="mailto:venslovaitisgediminas@gmail.com" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">Gediminas Venslovaitis</a></span>
                    </Col>
                
                </Row>
            </Col>
        </Container>
    );
}
export default Footer;