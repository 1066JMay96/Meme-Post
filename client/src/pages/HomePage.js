import React, {useState, useEffect} from "react"
import {Card, Button, Container, Row, Col, Image} from "react-bootstrap";
import API from "../utils/API";
import "../styles/Homepage.css";
import LikeButton from "../components/LikeButton";
import DislikeButton from "../components/DislikeButton";
import {useAuth} from "../contexts/AuthContext";


export default function HomePage() {

    const [memes, setMemes] = useState([]); //will store memes retrieved from database
    const {currentUser} = useAuth();

    useEffect(() => {
        getMemesToPost();
    }, []);

    const getMemesToPost = () => {
        API.getMemes()
        .then(({data}) => setMemes(data))
        .catch((err) => console.log(err));
    }

     //I am trying to save not only the user but also 
    //push the meme that the user is saving into the memesLiked array in mongodb
    //and to filter the saved meme page by the vurrent logged in users memes saved
    const handleMemeSave = (memeId) => {

        // find the meme that user is trying to save along with all its data
        const currentMeme = memes.find(data => data._id === memeId);

        let memeToSave = {
            currentLoggedUser: currentUser.email.split("@")[0],
            title: currentMeme.title,
            meme: currentMeme.meme,
            user: currentMeme.user
        };

        API.likeMeme(memeToSave)
        .then(() => console.log(memeToSave))
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