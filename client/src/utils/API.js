import axios from "axios";

export default {

    //retreive images for memes from api
    getMemePictures: function() {
        return axios.get("https://api.imgflip.com/get_memes");
    },
    // Get all Memes
    getMemes: function() {
        return axios.get("/api/create");
    },
    //get one meme
    getMeme: function(id) {
        return axios.get("/api/create/" + id);
    },
    //delete meme
    deleteMeme: function(id) {
        return axios.delete("/api/create/" + id);
    },
    //create a meme
    createMeme: function(memeData) {
        return axios.post("/api/create", memeData);
    },
    //post liked meme
    likeMeme: function(memeData) {
        return axios.post("/api/liked", memeData);
    },
    //unlike a meme
    unlikeMeme: function(memeId) {
        return axios.delete("/api/liked/" + memeId);
    },
};