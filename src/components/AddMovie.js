import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AddMovie = ({ NewMovieManagement }) => {
    const [show, setShow] = useState(false);

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rate, setRate] = useState("")
    const [posterUrl, setPosterUrl] = useState("")

    const toggle = () => {
        setShow(!show);
    };

    const handleAdd = () => {
        let newMovie = {
            title,
            description,
            rate,
            posterUrl
        }
        NewMovieManagement(newMovie)
    }
    return (
        <div className="add">
            <Button variant="danger" style={{padding:"40px"}} onClick={toggle}> Add movie </Button>

            <Modal show={show} onHide={toggle}>
                <Modal.Header closeButton>
                    <Modal.Title>Adding movie form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control //input
                                type="text"
                                placeholder="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicDescription"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicRate"
                        >
                            <Form.Label>Rate</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="rate"
                                value={rate}
                                onChange={(e) => setRate(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPosterUrl"
                        >
                            <Form.Label>PosterUrl</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="image URL"
                                value={posterUrl}
                                onChange={(e) => setPosterUrl(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={toggle}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleAdd()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddMovie;
