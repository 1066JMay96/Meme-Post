const router = require("express").Router();
const usersController = require("../../controllers/userController");

// mathces with "/api/creates"
router.route("/liked")
    .get(usersController.findAll)
    .post(usersController.create);

router.route("/:id")
    .get(usersController.findById)
    .delete(usersController.remove);