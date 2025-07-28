import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



export default function About() {
   

    return (
        <section className='about-section'>
            <Container fluid className="about-section" id="about">
                <div className="about-banner d-flex align-items-center">
                    <div className="container">
                        <div className="about-banner-content">
                            <h3>Welcome, My name is Gediminas Venslovaitis, you can find more information about me here.</h3>
                            <div className="banner-service">
                                <div className="section-title-2">
                                    <h4>Service</h4>
                                </div>
                                <h4>UI/UX Interactive, Mobile App & </h4>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    );

}