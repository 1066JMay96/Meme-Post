const router = require("express").Router();
const createdMemesController = require("../../controllers/createdMemeController");

// mathces with "/api/createdMeme"
router.route("/")
    .get(createdMemesController.findAll)
    .post(createdMemesController.create);


module.exports = router;


