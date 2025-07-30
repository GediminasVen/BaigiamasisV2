import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BackAnimation from './BackAnimation';


export default function HomeAbout() {
    const [expand, updateExpanded] = useState(false);
    return (
        <section className='home-padd'>
            <Container fluid className="home-about-section" id="home-about">
                <BackAnimation />
                <h4 className='section-title'>Who am I</h4>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col md={8} className='home-about-content'>
                        <h3>I'm Gediminas Venslovaitis, QA Engineer located at Vilnius Lithuania.</h3>
                        <Col className='home-about-para'>
                            <p>Experienced in manual and automated testing. Skilled in test case design, bug tracking (Jira), API testing (Postman), and automation tools like Selenium and Cypress. Familiar with CI/CD, Git, JavaScript, SQL, and RESTful APIs. Understanding of Agile workflows and OTT streaming platforms. Experienced with VMI reporting, SEPA/SWIFT, Open Banking, Acquiring, B2B integrations, Compliance and Risk Management.</p>
                        </Col>
                        <Link className='glow-on-hover btn btn-default btn-oval btn-xl' as={Link} to="/about" onClick={() => updateExpanded(false)}>About me <FaArrowRight size={12} color='bisque'></FaArrowRight></Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}