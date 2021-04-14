import React, {useState, useEffect} from "react"
import {Card, Button, Container, Row, Col, Image} from "react-bootstrap";
import API from "../utils/API";
import {useAuth} from "../contexts/AuthContext";

export default function LikedMemePage() {
    const [memes, setMemes] = useState([]); //use state to hold memes saved in the LikedMeme database
    //const {currentUser} = useAuth();

    useEffect(() => {
        getMemesToPost();
    }, []);

    const getMemesToPost = () => {
        API.getLikedMeme()
        .then(({data}) => setMemes(data))
        .catch((err) => console.log(err));
    }

    const handleDeleteMeme = (memeId) => {
        console.log(memeId);

        API.unlikeMeme(memeId)
        .then(() => getMemesToPost())
        .catch((err) => console.log(err));
    }

    return (
        <Container fluid className="d-flex meme justify-content-center">
        <Row>
            <Col lg={12} sm={12}>
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
                                        <Button variant="btn btn-outline save-btn" onClick={() => handleDeleteMeme(memeToShow._id)}><i className="fas fa-bookmark"></i></Button>
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