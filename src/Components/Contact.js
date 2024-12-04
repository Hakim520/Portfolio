import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from '../assets/images/contact-img.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';

export const Contact = () => {

    const fromInitDetails= {

            first_name:'',
            last_name:'',
            email:'',
            phone_number:'',
            message:'',

    };

    const [formDetails, setFormDetails]= useState(fromInitDetails);
    const [buttonText, setButtonText]= useState('send');
    const [status, setStatus]=useState({});


    const onFormUpdate = (field,value) => {
       
        setFormDetails({

            ...formDetails,
             [field]:value
            }
    )
    };


    const handleSubmit = async(e) =>{
        e.preventDefault();
        setButtonText('Sending ...');
        let response = await fetch("https://portfolio-pg9z.onrender.com/contact",{
            method:"POST",
            headers:
                {
                    "Content-Type": "application/json;charset=utf-8",                    },
            body:
                JSON.stringify(formDetails),
                });
        setButtonText('Send');        
        let result = await response.json();
        setFormDetails(fromInitDetails);
        if (result.code == 200) {
            setStatus({ success: true, message: 'Form submitted successfully' });
        } else {
            setStatus({ success: false, message: 'Something went wrong, please try again later ! ' });
        }

    };

    return(

        <section className="contact" id='connect'>


            <Container>
                <Row className="align-items-center" >
                    <Col md={6} data-aos="flip-left">
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6} data-aos="flip-left">
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                            
                                <Col sm={6} className="px-1">
                                    <input type="text"  placeholder="First name" value = {formDetails.first_name} onChange={(e)=> onFormUpdate('first_name',e.target.value)} />
                                </Col>
                                <Col sm={6}>
                                    <input type="text" value ={formDetails.last_name} placeholder="Last name" onChange={(e)=> onFormUpdate('last_name',e.target.value)} />
                                    
                                </Col>

                           

                            
                                <Col sm={6} className="px-1">
                                    <input type="email" value ={formDetails.email} placeholder="Email address" onChange={(e)=> onFormUpdate('email',e.target.value)} />
                                   
                                </Col>
                                <Col sm={6}>
                                    <input type="tel" value ={formDetails.phone_number} placeholder="Phone Number" onChange={(e)=> onFormUpdate('phone_number',e.target.value)} />
                                    
                                </Col>

                                <Col>
                                
                                    <textarea rows="4" value={formDetails.message} placeholder="message" onChange= {(e)=> onFormUpdate('message',e.target.value)}/>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>

                                {
                                    status.message && 
                                    <Col>
                                    <p className={status.success === false ? "danger" : "success"} >{status.message}</p>
                                    </Col>
                                }

                            </Row>    
                        </form>

                    </Col>


                </Row>
            </Container>

        </section>






    )
}