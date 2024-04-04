const server = require("./src");
require("dotenv").config();
const config = new server()
config.listen();