import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sphere from '../../containers/Sphere';
import '../../vendor/tagcanvas.min';
import 'animate.css';
import BackAnimation from '../Home/BackAnimation';

const skills = [
    "Manual Testing",
    "TestRail",
    "Postman",
    "Charles Proxy",
    "Jira",
    "Cypress",
    "Instabug",
    "Corezoid",
    "Zoho",
    "MongoDB",
    "Nano",
    "API Testing",
    "Regression Testing",
    "Smoke Testing",
    "UAT",
    "Agile/Scrum",
    "Functional Testing",
    "Bug Reporting",
    "QA Automation",
    "AWS",
    "Git",
    "VS Code"
];

export default function Skills() {
    const [expand, updateExpanded] = useState(false);
    const [focus, setFocus] = React.useState(false);
    const [isVisible, setVisible] = React.useState(false);
    return (
        <section>
            <Container fluid className="skill-section" id="skill">
                <BackAnimation />
                <h4 className="section-title">My QA Skills</h4>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <div className="skills_content">
                        <div className="skills_main">
                            <div className="left_side">
                                <div className="skill-col">
                                    <h3>I bring strong expertise in Quality Assurance across FinTech, Streaming, and Banking systems using modern QA tools and test strategies.</h3>
                                    <p>
                                        <span>** Testing Types:</span> Manual Testing, Regression Testing, Smoke Testing, UAT, Functional Testing.<br />
                                        <span>** Tools:</span> Cypress, Postman, TestRail, Instabug, Charles Proxy, Zoho, Jira.<br />
                                        <span>** Backend & Data:</span> MongoDB, Nano, Corezoid, API Testing, AWS.<br />
                                        <span>** Collaboration:</span> Git, Agile/Scrum, VS Code.
                                    </p>
                                </div>
                            </div>
                            <div className="right_side">
                                <Sphere id={'mySkills'} width={550} height={500} items={skills} />
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
}
