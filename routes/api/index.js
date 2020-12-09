const router = require("express").Router();
const createdMemeRoutes = require("./createdMeme");
const likedMemeRoutes = require("./likedMeme");

//created meme route
router.use("/createdMeme", createdMemeRoutes);

//liked meme routes
router.use("/likedMeme", likedMemeRoutes);

module.exports = router;