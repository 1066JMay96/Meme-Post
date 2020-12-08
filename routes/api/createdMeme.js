const router = require("express").Router();
const createdMemesController = require("../../controllers/createdMemeController");

// mathces with "/api/creates"
router.route("/createdMeme")
    .post(createdMemesController.create);


