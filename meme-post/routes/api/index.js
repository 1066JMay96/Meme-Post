const router = require("express").Router();
const createdMemeRoutes = require("./createdMeme");
const likedMemeRoutes = require("./likedMeme");
const userMemeRoutes = require("./users");

//created meme route
router.use("/create", createdMemeRoutes);

//liked meme routes
router.use("/liked", likedMemeRoutes);

router.use("/users", userMemeRoutes);

module.exports = router;