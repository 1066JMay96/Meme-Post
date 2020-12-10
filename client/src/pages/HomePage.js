import React, {useState, useEffect} from "react"
import {Card, Button, Container, Row, Col, Image} from "react-bootstrap";
import API from "../utils/API";
import "../styles/Homepage.css";
import LikeButton from "../components/LikeButton";
import DislikeButton from "../components/DislikeButton";


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

        console.log(memeId)

        // find the book in memes state by the mathcing id
        const memeToSave = memes.find(data => data._id === memeId);

        //it returns undefined
        console.log(memeToSave);
        API.likeMeme(memeToSave)
        .then(() => console.log("meme saved!!"))
        .catch((err) => console.log(err));
    }

    return (
        <Container fluid className="d-flex meme justify-content-center">
            <Row>
                <Col lg={8} sm={12}>
                    {memes.map((memeToShow) => {
                        return (
                            <>
                                <Card key={memeToShow._id} className="meme-card">
                                    <Card.Title className="meme-title">{memeToShow.title}</Card.Title>
                                    <Card.Body className="meme-card-body">
                                        <Image src={memeToShow.meme} alt="meme-pic" className="meme-picture w-100"fluid/>
                                    </Card.Body>
                                    <Row>
                                        <Col size={12}>
                                            <h4 className="meme-artist">Made By: <span className="meme-artist-name">{memeToShow.user}</span></h4>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col size={12} >
                                            <LikeButton />
                                            <DislikeButton />
                                            <Button variant="btn btn-outline save-btn" onClick={() => handleMemeSave(memeToShow._id)}><i className="far fa-bookmark"></i></Button>
                                        </Col>
                                    </Row>
                                </Card>
                                <br></br>
                            </>
                        );
                    })}
                </Col>
            </Row>
        </Container>
    );
}