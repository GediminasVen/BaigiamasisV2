import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import BackAnimation from '../Home/BackAnimation';

export default function Experience() {
    const [expand, updateExpanded] = useState(false);

    const products = [
        {
            id: 1,
            productcode: 'one',
            productname: '2025 – Present',
            productdes: 'QA Engineer',
            link: '/2025',
            productfetur: [{
                name: 'Organization: GO3',
                title: 'Role: QA Engineer',
                describe: 'Responsible for User Test Tool (UTT) maintenance and execution of UAT (User Acceptance Testing) scenarios for a large-scale video streaming platform. Work includes end-to-end test strategy design, exploratory testing, test documentation, and collaboration with product, dev, and support teams to validate feature readiness.'
            }],
        },
        {
            id: 2,
            productcode: 'two',
            productname: '2024 – 2025',
            productdes: 'Junior QA Engineer',
            link: '/2024',
            productfetur: [{
                name: 'Organization: VIALET',
                title: 'Role: Junior QA Engineer',
                describe: 'Worked on QA testing for B2B banking, Open Banking, SWIFT/SEPA transfers, and acquiring flows. Tools and technologies included Cypress, Instabug, Corezoid, AWS, MongoDB, Zoho, and Nano. Created test cases, executed both manual and automated tests, reported bugs, and improved regression coverage.'
            }],
        },
        {
            id: 3,
            productcode: 'three',
            productname: '2022 – 2024',
            productdes: 'Senior Merchant Risk Analyst',
            link: '/2022',
            productfetur: [{
                name: 'Organization: Shift4',
                title: 'Role: Senior Merchant Risk Analyst',
                describe: 'Led Operational, Investigation, and Analytics teams. Reviewed ODD/EDD processes, filed UAR/SAR reports, monitored ACH rejects and suspicious activity. Built automations to streamline backlog and fraud alerts. Collaborated with collections and chargebacks to reduce losses and prevent internal theft.'
            }],
        },
        {
            id: 4,
            productcode: 'four',
            productname: '2021 – 2022',
            productdes: 'Technical Advanced Support',
            link: '/2021',
            productfetur: [{
                name: 'Organization: Shift4',
                title: 'Role: Technical Advanced Support → Tier 3',
                describe: 'Provided high-level support for payment systems and was escalation point for the MerchantLink gateway. Resolved technical payment issues, coordinated with developers and merchants, and ensured platform stability across multiple clients.'
            }],
        },
        {
            id: 5,
            productcode: 'five',
            productname: '2019 – 2021',
            productdes: 'Goods In Coordinator',
            link: '/2019',
            productfetur: [{
                name: 'Organization: Tesco (London)',
                title: 'Role: Warehouse Operative → Goods In Clerk → Coordinator',
                describe: 'Coordinated warehouse intake operations for 100+ employees per shift. Managed grid assignments, shift rotations, and inbound flow. Worked cross-functionally with transport and operations teams for efficiency.'
            }],
        },
        {
            id: 6,
            productcode: 'six',
            productname: '2016 – 2019 (summers)',
            productdes: 'Warehouse Operative & Quality Specialist',
            link: '/2016',
            productfetur: [{
                name: 'Organization: Yding Grønt (Denmark)',
                title: 'Role: Warehouse Operative & Quality Specialist',
                describe: 'Worked seasonally in sorting, packing, and inspecting agricultural products. Ensured quality standards for export. Gained hands-on experience in supply chain operations and quality control.'
            }],
        }
    ];

    return (
        <section className='home-padd'>
            <Container fluid className='industry-exprience-content' id='exprience'>
                <BackAnimation />
                <h4 className='section-title'>My Experience</h4>
                <Row className="justify-content-md-center">
                    <Col md={10} className='industry-exprience'>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="one">
                            <Row>
                                <Col sm={3} className="tabname">
                                    <Nav variant="pills" className="flex-column">
                                        {products.map((item) => (
                                            <Nav.Item key={item.id}>
                                                <Nav.Link className='solnav' eventKey={item.productcode}>
                                                    {item.productname}
                                                </Nav.Link>
                                            </Nav.Item>
                                        ))}
                                    </Nav>
                                </Col>
                                <Col sm={9} className="tabcontent">
                                    <Tab.Content>
                                        {products.map((item, index) => (
                                            <Tab.Pane eventKey={item.productcode} key={index}>
                                                <Col md={12} className="industry-exprience-main">
                                                    <Row>
                                                        <Col md={12} className="industry-exprience-col-1">
                                                            <Row>
                                                                <Col md={10} className="industry-exprience-col-content">
                                                                    <h4 className='industry-product-name'>{item.productname}</h4>
                                                                    <h3 className='industry-product-des'>{item.productdes}</h3>
                                                                    {item.productfetur.map((subitem, i) => (
                                                                        <ul key={i} className="solution-industry-icons">
                                                                            <li className="industry-icons">{subitem.name}</li>
                                                                            <li className="industry-icons">{subitem.title}</li>
                                                                            <li className="industry-icons">{subitem.describe}</li>
                                                                        </ul>
                                                                    ))}
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Tab.Pane>
                                        ))}
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
