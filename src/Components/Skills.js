import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from "react-bootstrap";
/* up */
import html from '../assets/images/html.svg'
import css from '../assets/images/css.svg'
import bootstrap from '../assets/images/bootstrap.svg'
import js from '../assets/images/js.svg'
import react from '../assets/images/react.svg'
import node from '../assets/images/node.svg'
import django from '../assets/images/django.svg'

/* Down */
import mongodb from '../assets/images/mongodb.svg'
import postgresql from '../assets/images/postgresql.svg'
import postman from '../assets/images/postman.svg'
import git from '../assets/images/git.svg'
import docker from '../assets/images/docker.svg'
import figma from '../assets/images/figma.svg'



import 'animate.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';


export const Skills = () => {



  useEffect(()=>{

    AOS.init();

  },[]);
    return (
      
    <section className="skill" id="skills" >
                {/* <img style={{position:'absolute', top:'-135px', zIndex:'' }} src={wave} alt="Image" /> */}

        <Container>
        
          <Row>
            <div className="skill-bx" data-aos="fade-up">
            <h2>Skills</h2>
            {/* <p>Here are some of the skills I have acquired over the years</p> */}
              <Col sm={12} md={12} lg={12}>
            
                  <div className='cards' data-aos="fade-right">
                      <Card className='card' >
                        <Card.Img  src={html} />
                        <span className="tooltiptext">HTML</span>
                      </Card>
                      <Card className='card' >
                        <Card.Img  src={css} />
                        <span className="tooltiptext">CSS</span>

                      </Card>  
                      <Card className='card' >
                        <Card.Img  src={bootstrap} />
                        <span className="tooltiptext">Bootstrap</span>

                      </Card>   
                      <Card className='card' >
                        <Card.Img  src={js} />
                        <span className="tooltiptext">JavaScript</span>

                      </Card>   
                      <Card className='card' >
                        <Card.Img  src={react} />
                        <span className="tooltiptext">React</span>

                      </Card> 
                      <Card className='card' >
                        <Card.Img  src={node} />
                        <span className="tooltiptext">Node js</span>

                      </Card>  
                      <Card className='card' >
                        <Card.Img  src={django} />
                        <span className="tooltiptext">Django</span>

                      </Card>     
                    </div> 
                    
                
              </Col>
              <Col sm={12} md={12} lg={12}>
              
                
                  <div className='cards' data-aos="fade-left">
                      <Card className='card' >
                        <Card.Img  src={mongodb} />
                        <span className="tooltiptext">Mongodb</span>

                      </Card>
                      <Card className='card' >
                        <Card.Img  src={postgresql} />
                        <span className="tooltiptext">PostgreSQL</span>

                      </Card>  
                      <Card className='card' >
                        <Card.Img  src={postman} />
                        <span className="tooltiptext">Postman</span>

                      </Card>  
                      <Card className='card' >
                        <Card.Img  src={git} />
                        <span className="tooltiptext">Git</span>

                      </Card>  
                      <Card className='card' >
                        <Card.Img  src={docker} />
                        <span className="tooltiptext">docker</span>

                      </Card> 
                      <Card className='card' >
                        <Card.Img  src={figma} />
                        <span className="tooltiptext">Figma</span>

                      </Card>       
                    </div> 
                
              </Col>
              
              </div>
              
          </Row>
          

                     
        </Container>

        {/* <img className="background-image-left" src={colorsharp} alt="Image" /> */}
        {/* <img className="background-image-right" src={colorsharpRight} alt="Image" /> */}


        
    </section>
    


        )
}