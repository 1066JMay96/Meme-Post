const router = require("express").Router();
const accountController = require("../../controllers/accountController");

// mathces with "/api/account"
router.route("/account")
  .post()