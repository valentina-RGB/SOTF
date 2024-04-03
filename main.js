const Server = require("./src");
require("dotenv").config();
const config = new Server()
config.listen();