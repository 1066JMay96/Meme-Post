import axios from "axios";

export default {
    // Get all Memes
    getMemes: function() {
        return axios.get("/api/createdMeme");
    },
    //get one meme
    getMeme: function(id) {
        return axios.get("/api/createdMeme/" + id);
    },
    //delete meme
    deleteMeme: function(id) {
        return axios.delete("/api/createdMeme/" + id);
    },
    //create a meme
    createMeme: function(memeData) {
        console.log(memeData)
        return axios.post("/api/createdMeme", memeData);
    },
    //post liked meme
    likeMeme: function(memeData) {
        return axios.post("/api/likedMeme", memeData);
    },
    //unlike a meme
    unlikeMeme: function(memeId) {
        return axios.delete("/api/likedMeme/" + memeId);
    },
};