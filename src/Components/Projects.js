import {Container, Row, Col, Nav} from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabPane from 'react-bootstrap/TabPane';

import projImg1 from '../assets/images/projImg1.svg';
import projImg2 from '../assets/images/projImg2.svg';
import projImg3 from '../assets/images/projImg3.svg';


import {ProjectCard} from './ProjectCard.js';

export const Projects = () => {

    const projects = [

        {
            title:"1",
            description:"description",
            imgUrl:projImg1,
        },
        {
            title:"2",
            description:"description",
            imgUrl:projImg2,
        },
        {
            title:"3",
            description:"description",
            imgUrl:projImg3,
        },
    ];

    return (

    <section className="project" id="projects">
        <Container>

            <Row>
                <Col>
                    
                    <h2>Projects</h2>
                    <p>Lorem Ipsum</p>

                    <Tab.Container defaultActiveKey="First" transition={false} id="projects-tabs">
                        <Nav className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="First">Tab 1</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content>
                            <Tab.Pane eventKey="First">

                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        }
                                        
                                        
                                        )
                                    }
                                </Row>

                            </Tab.Pane>

                        </Tab.Content>

                       
                    </Tab.Container>
                </Col>

            </Row>

        </Container>


    


    </section>

)
}