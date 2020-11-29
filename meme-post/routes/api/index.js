const router = require("express").Router();
const createdMemeRoutes = require("./createdMeme");

//created meme route
router.use("/create", createdMemeRoutes);

//liked meme routes
router.use("/liked", )

module.exports = router;