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
    likeMeme: function(memeData) {
        return axios({
            method: "post",
            url: "/api/likedMeme",
            data: memeData
        })
    },
    //unlike a meme
    unlikeMeme: function(memeId) {
        console.log(memeId)
        return axios.delete(`/api/likedMeme/${memeId}`);
    },
    //get Liked Memes from api
    getLikedMeme: function(currentUser) {
        return axios.get("/api/likedMeme", currentUser);
    }
};