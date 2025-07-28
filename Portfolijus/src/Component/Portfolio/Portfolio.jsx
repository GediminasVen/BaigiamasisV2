import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectList from './ProjectList';
import Filter from '../Portfolio/Filter';
import { projects } from './projects';
import BackAnimation from '../Home/BackAnimation';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState(null);

    const handleFilterClick = (category) => {
        setActiveFilter(category);
    };

    const filteredProjects =
        activeFilter === null
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    return (
        <section>
            <Container fluid className='portfolio-filter-content' id="portfolio">
                <BackAnimation />
                <h4 className='section-title'>My QA Projects</h4>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col md={10} className='project-filter-content'>
                        <div className="filter-buttons">
                            <Filter
                                label="All"
                                isActive={activeFilter === null}
                                onClick={() => handleFilterClick(null)}
                            />
                            <Filter
                                label="QA Engineering"
                                isActive={activeFilter === "QA Engineering"}
                                onClick={() => handleFilterClick("QA Engineering")}
                            />
                            <Filter
                                label="Streaming Platform QA"
                                isActive={activeFilter === "Streaming Platform QA"}
                                onClick={() => handleFilterClick("Streaming Platform QA")}
                            />
                            <Filter
                                label="Fintech QA"
                                isActive={activeFilter === "Fintech QA"}
                                onClick={() => handleFilterClick("Fintech QA")}
                            />
                            <Filter
                                label="Mobile QA"
                                isActive={activeFilter === "Mobile QA"}
                                onClick={() => handleFilterClick("Mobile QA")}
                            />
                            <Filter
                                label="Test Management"
                                isActive={activeFilter === "Test Management"}
                                onClick={() => handleFilterClick("Test Management")}
                            />
                            <Filter
                                label="DevOps for QA"
                                isActive={activeFilter === "DevOps for QA"}
                                onClick={() => handleFilterClick("DevOps for QA")}
                            />
                            <Filter
                                label="Accessibility QA"
                                isActive={activeFilter === "Accessibility QA"}
                                onClick={() => handleFilterClick("Accessibility QA")}
                            />
                            <Filter
                                label="QA Showcase"
                                isActive={activeFilter === "QA Showcase"}
                                onClick={() => handleFilterClick("QA Showcase")}
                            />
                            <Filter
                                label="Portfolio"
                                isActive={activeFilter === "Portfolio"}
                                onClick={() => handleFilterClick("Portfolio")}
                            />
                        </div>
                        <ProjectList projects={filteredProjects} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Portfolio;
