import {Container, Row, Col, Nav} from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';


import projImg1 from '../assets/images/maktabatitest.png';
import projImg2 from '../assets/images/deo.png';
import projImg3 from '../assets/images/TimeManager.png';

import { useEffect } from "react";
import {ProjectCard} from './ProjectCard.js';

import 'animate.css';


import AOS from 'aos';
import 'aos/dist/aos.css';

export const Projects = () => {

    
  useEffect(()=>{

    AOS.init();

  },[]);

    const projects = [

        {
            title:"Maktabati",
            description:"Maktabati is a web application designed for bookholics to explore and discover a variety of books.",
            imgUrl:projImg1,
        },
        {
            title:"DataMaster",
            description:"DataMaster is a web application designed for managing and analyzing data, featuring an integrated NLP model for query generation",
            imgUrl:projImg2,
        },
        {
            title:"Time Manager",
            description:"Time-Manager is a web application designed to manage the working hours of employees in a company",
            imgUrl:projImg3,
        },
    ];

    return (

        
    
    <section className="project" id="projects" >
        
        
        <Container>
        
        
            <Row>
                <Col>
               
                
                 <div data-aos="fade-up">
                    <h2>Projects</h2>
                    <p>Here are a few projects I've worked on, showcasing my skills and creativity.</p>
                
                    </div>
                    <Tab.Container defaultActiveKey="First" transition={false} id="projects-tabs">
                        <Nav className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" data-aos="fade-up">
                            <Nav.Item >
                                <Nav.Link eventKey="First">Tab 1</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content>
                            <Tab.Pane eventKey="First" data-aos="zoom-in">

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