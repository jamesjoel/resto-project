const routes = require("express").Router();

routes.use("/api/city", (require("../controllers/CityController")));
routes.use("/api/signup", (require("../controllers/SignupController")));
routes.use("/api/auth", (require("../controllers/AuthController")));
routes.use("/api/admin-auth", require("../controllers/AdminAuthController"));
routes.use("/api/mainmenu", require("../controllers/MainMenuController"));
routes.use("/api/menu", require("../controllers/MenuController"));
routes.use("/api/contact", require("../controllers/ContactController"));

module.exports = routes;