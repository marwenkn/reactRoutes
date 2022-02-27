import React from "react";
import { Navbar, Container, Form, FormControl } from "react-bootstrap";
import ReactStars from "react-stars";

const Head = ({NameManagement, RateManagement}) => {
    return (
        <Navbar className="navbar navbar-light Head navbar-fixed-top" style={{backgroundColor: "#424242"}}>
            <Container>
                <Navbar.Brand style={{color: "whitesmoke"}}> <span className="logo"> The Plateform </span> </Navbar.Brand>
                <ReactStars count={5} size={24} color2={"yellow"} onChange={RateManagement} />
                <Form className="d-flex">
                    <FormControl type="search" placeholder="Search" onChange={(e) => NameManagement(e)} className="me-2" aria-label="Search" />
                </Form>
            </Container>
        </Navbar>
    );
};

export default Head;
