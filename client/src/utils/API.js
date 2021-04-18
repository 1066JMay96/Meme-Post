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
    //saves a meme to database
    createMeme: function(memeData) {
        console.log(memeData)
        return axios({
            method: "post",
            url: "/api/createdMeme",
            data: memeData
        })
    },
    // post liked meme
    saveMeme: function(memeData) {
        return axios({
            method: "post",
            url: "/api/savedMeme",
            data: memeData
        })
    },
    //unlike a meme
    unsaveMeme: function(memeId) {
        console.log(memeId)
        return axios.delete(`/api/savedMeme/${memeId}`);
    },
    //get Liked Memes from api
    getSavedMemes: function(currentUser) {
        return axios.get("/api/savedMeme", currentUser);
    }
};