import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';

export const Footer = () => {


    return (


        <footer className="footer">

            <Container>
                <Row className="align-items-center">
                    <Col className="text-center text-sm-end"> 
                        <div className="social-icon social-icon-footer" style={{ paddingTop: "20px" }}>
                                    <a href="https://linkedin.com/in/hakim-kadem-b42109241" target="_blank"><img src={navIcon1} alt="image" /></a>
                                    <a href="https://github.com/Hakim520" target="_blank"><img src={navIcon2} alt="image" /></a>
                                    
                        </div>
                        <p>Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>



    )
}