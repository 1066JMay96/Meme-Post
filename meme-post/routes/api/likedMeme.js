const router = require("express").Router();
const likedMemesController = require();

// mathces with "/api/creates"
router.route("/create")
    .post(likedMemesController.create);
