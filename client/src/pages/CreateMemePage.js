import React, { useEffect, useState } from "react"
import {Container, Form, Button} from "react-bootstrap";
import "../styles/CreateMemePage.css";
import Meme from "../components/Meme/";

export default function CreateMemePage() {

    
    const [templates, setTemplates] = useState([]); //tmeplates stores all the meme img's retrieved from API
    const [template, setTemplate] = useState(null); //template stores which image the user chose to use

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(x => x.json().then(res => setTemplates(res.data.memes))
        );
    }, []);

    return (
        <div>
            <h1>Create a Meme</h1>
            <Container fluid className="meme-display-container">
                {template && (
                    <>
                        <Meme template={template}/>
                        <Form>
                        <Form.Group id="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control placeholder="Title of Meme" />
                        </Form.Group>
                        <Form.Group id="top-text">
                            <Form.Label>Top-Text</Form.Label>
                            <Form.Control placeholder="top-text" />
                        </Form.Group>
                        <Form.Group id="bottom-text">
                            <Form.Label>Bottom-Text</Form.Label>
                            <Form.Control  placeholder="Bottom-Text" />
                        </Form.Group>
                        <Button className="btn btn-primary" type="submit">Create Meme</Button>
                    </Form>
                  </>
                )}
                {!template && templates.map((template) => {
                    return (
                        <img             
                            className="meme-img ml-2 mt-2" 
                            key={template.id} 
                            src={template.url} 
                            alt={template.name}
                            onClick={() => {
                                setTemplate(template)
                            }}
                        />
                    );
                })}
            </Container>
        </div>
    );
}