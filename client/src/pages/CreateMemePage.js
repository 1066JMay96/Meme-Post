import React, { useEffect, useState } from "react"
import {Container, Form, Button} from "react-bootstrap";
import "../styles/CreateMemePage.css";
import Meme from "../components/Meme/";
import {useAuth} from "../contexts/AuthContext";
import API from "../utils/API";

const objectToQueryParam = (obj) => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`)
    return '?' + params.join("&")
}

export default function CreateMemePage() {

    
    const [templates, setTemplates] = useState([]); //tmeplates stores all the meme img's retrieved from API
    const [template, setTemplate] = useState(null); //template stores which image the user chose to use
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');
    const [title, setTitle] = useState('');
    

    //to get the current user
    const {currentUser} = useAuth();

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(x => x.json().then(res => setTemplates(res.data.memes))
        );
    }, []);


    async function handleSubmit(event) {
        event.preventDefault();
        console.log("pressed");

        const params = {
            template_id: template.id,
            text0: topText,
            text1: bottomText,
            username: "MemePost",
            password: "memePost001"

        }

        //will take all the parameters needed to make the meme and send it to their api
        const response = await fetch(`https://api.imgflip.com/caption_image${objectToQueryParam(params)}`);


        console.log(title);

        //url of finished meme from API
        const data = await response.json()
        console.log(data.data.url);

        //get the current user
        const userEmail = {
            user: currentUser.email
        }
        console.log(userEmail);

        if(title && data && userEmail) {
            let memes = {
                title: title,
                meme: data.data.url,
                user: userEmail.user
            }
            console.log(memes);
           API.createMeme(memes)
            .then(() => console.log("meme made"))
            .catch((err) => console.log(err))
        }

    }

    return (
        <div>
            <h1>Create a Meme</h1>
            <Container fluid className="meme-display-container">
                {template && (
                    <>
                        <Meme template={template}/>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control placeholder="Title of Meme" onChange={e => setTitle(e.target.value)} value={title}/>
                            </Form.Group>
                            <Form.Group id="top-text">
                                <Form.Label>Top-Text</Form.Label>
                                <Form.Control placeholder="top-text" onChange={e => setTopText(e.target.value)} value={topText}/>
                            </Form.Group>
                            <Form.Group id="bottom-text">
                                <Form.Label>Bottom-Text</Form.Label>
                                <Form.Control  placeholder="bottom-text"  onChange={e => setBottomText(e.target.value)} value={bottomText}/>
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