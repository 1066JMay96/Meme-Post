const router = require("express").Router();
const createdMemeRoutes = require("./createdMeme");
const likedMemeRoutes = require("./likedMeme");

//created meme route
router.use("/create", createdMemeRoutes);

//liked meme routes
router.use("/liked", likedMemeRoutes);

module.exports = router;