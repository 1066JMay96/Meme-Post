const router = require("express").Router();
const likedMemesController = require("../../controllers/likeMemeController");

// mathces with "/api/creates"
router.route("/likedMeme")
    .post(likedMemesController.create);
