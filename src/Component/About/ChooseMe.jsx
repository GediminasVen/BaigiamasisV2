import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BackAnimation from '../Home/BackAnimation';

export default function ChooseMe() {

    const webcontant = [
        {
            id: 1,
            name: 'Comprehensive QA Skills',
            para: 'I bring hands-on experience with manual and automated testing, including functional, regression, smoke, and exploratory testing across diverse platforms.',
            link: '#'
        },
        {
            id: 2,
            name: 'Test Automation Expertise',
            para: 'Proficient in Cypress, Postman, and other automation tools to ensure efficient regression coverage and CI/CD integration.',
            link: '#'
        },
        {
            id: 3,
            name: 'Cross-Platform Testing',
            para: 'Experienced in testing web, mobile, and backend services to ensure consistent functionality across all user touchpoints.',
            link: '#'
        },
        {
            id: 4,
            name: 'Real-World Domain Experience',
            para: 'Worked in fintech, streaming, and open banking industries — ensuring quality in high-risk, fast-paced production environments.',
            link: '#'
        },
        {
            id: 5,
            name: 'Collaboration & Documentation',
            para: 'I promote clear communication with developers and stakeholders through detailed bug reports, test plans, and QA documentation.',
            link: '#'
        },
        {
            id: 6,
            name: 'Performance & Load Testing Awareness',
            para: 'While my focus is functional QA, I’m also mindful of performance bottlenecks and edge-case stress testing scenarios.',
            link: '#'
        },
        {
            id: 7,
            name: 'Detail-Oriented',
            para: 'Meticulous in test case creation, execution, and result tracking to catch even the smallest inconsistencies.',
            link: '#'
        },
        {
            id: 8,
            name: 'Driven by Quality',
            para: 'I approach QA with curiosity and a user-first mindset — aiming not just to test, but to improve the overall product.',
            link: '#'
        },
        {
            id: 9,
            name: 'Continuous Learner',
            para: 'I regularly update my knowledge of QA tools, testing methodologies, and development workflows to stay effective.',
            link: '#'
        }
    ];

    return (
        <section className='home-padd'>
            <Container fluid className="choose-me-container" id='choose-me'>
                <BackAnimation />
                <h4 className='section-title'>Why Choose Me</h4>
                <Row className="justify-content-md-center">
                    <Col md={10} className='choose-me-contant'>
                        <Row style={{ justifyContent: "center" }}>
                            {
                                webcontant.map((item, i) => (
                                    <Col sm={4} className="choose-me-box" key={i}>
                                        <h5>{item.name}</h5>
                                        <p>{item.para}</p>
                                        <Link className='glow-on-hover btn btn-default btn-oval btn-xl' as={Link} to="/contact">
                                            Learn More  <FaArrowRight size={12} color='bisque' />
                                        </Link>
                                    </Col>
                                ))
                            }
                        </Row>
                        <Col md={12}>
                            <Link className='glow-on-hover btn btn-default btn-oval btn-xl' as={Link} to="/contact">
                                Let's Discuss  <FaArrowRight size={12} color='bisque' />
                            </Link>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
