const router = require("express").Router();
const likedMemesController = require("../../controllers/likeMemeController");

// mathces with "/api/creates"
router.route("/liked")
    .post(likedMemesController.create);
