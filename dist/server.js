"use strict";
exports.__esModule = true;
var path_1 = require("path");
var dotenv_1 = require("dotenv");
var graphql_yoga_1 = require("graphql-yoga");
var schema_1 = require("./schema");
var database_1 = require("./db/database");
var logger = require("morgan");
dotenv_1.config({ path: path_1.resolve(__dirname, '../.env') });
var PORT = process.env.PORT || 4000;
var pubsub = new graphql_yoga_1.PubSub();
var server = new graphql_yoga_1.GraphQLServer({ schema: schema_1["default"], context: { pubsub: pubsub } });
// Connect to DB
database_1.connect();
// Server Start
void server.start({ port: PORT }, function () { return console.log("Server is running on http://localhost:" + PORT); });
server.express.use(logger('dev'));
//# sourceMappingURL=server.js.map