import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import {  BsLinkedin, BsTwitter,  BsGithub,  } from "react-icons/bs";
const FooterComponent = ()=>{
    
    return (
        <>
            <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col className=''>
                            <h3 className='head_3'>Follow Me :- </h3>
                            <ul className='socialIconsList'>
                               
                                <li>
                                    <a rel="noreferrer" href="https://www.linkedin.com/in/sumitlakum09/" target="_blank">
                                        <BsLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="hhttps://twitter.com/lakum_sumit" target="_blank">
                                        <BsTwitter />
                                    </a>
                                </li>
                              
                              
                                <li>
                                    <a rel="noreferrer" href="https://github.com/sumitlakum" target="_blank">
                                        <BsGithub />
                                    </a>
                                </li>
                               
                            </ul>
                            
                        </Col>
                        <Col className='col-12'>
                            <div className="footerCopyright">
                                <small>© 😎Sumit Lakum ❤️, 2023.</small>
                            </div>
                        </Col>
                   </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;