import React, {useState, useEffect} from "react"
import {Card, Button, Container, Row, Col, Image} from "react-bootstrap";
import API from "../utils/API";
import "../styles/Homepage.css";


export default function HomePage() {

    const [memes, setMemes] = useState([]); //will store memes retrieved from database

    useEffect(() => {
        getMemesToPost();
    }, []);

    const getMemesToPost = () => {
        API.getMemes()
        .then(({data}) => setMemes(data))
        .catch((err) => console.log(err));
    }
    console.log(memes)

    const handleMemeSave = (memeId) => {

        // find the book in meme state by the mathcing id
        const memeToSave = memes.find((data) => data.memeId === memeId);
        console.log(memeToSave);
    }

    return (
        <Container fluid className="d-flex justify-content-center mt-5" >
            <Row>
                {memes.map((memeToShow) => {
                    return (
                        <Col lg={12} sm={8}>
                            <Card key={memeToShow._id} className="mr-10" style={{width: "100%", maxWidth: "500px"}}>
                                <Card.Title>{memeToShow.title}</Card.Title>
                                <Card.Body>
                                    <Image src={memeToShow.meme} alt="meme-pic" fluid/>
                                </Card.Body>
                                <Row>
                                    <Col size={12}>
                                        <h4 className="meme-artist">Made By: <span className="meme-artist-name">{memeToShow.user}</span></h4>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size={12} >
                                        <Button variant="success" className="like-btn ml-3 mb-3" style={{width: "50px" }}><i className="far fa-thumbs-up"></i></Button>
                                        <Button variant="danger" className="like-btn ml-3 mb-3" style={{width: "50px" }}><i className="far fa-thumbs-down"></i></Button>
                                        <Button variant="btn btn-outline save-btn" onClick={() => handleMemeSave(memeToShow._id)}><i className="far fa-bookmark"></i></Button>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}