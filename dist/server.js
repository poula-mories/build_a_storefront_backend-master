"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var users_1 = __importDefault(require("./handlers/users"));
var products_1 = __importDefault(require("./handlers/products"));
var orders_1 = __importDefault(require("./handlers/orders"));
var app = (0, express_1["default"])();
var address = "localhost:3000";
app.use(body_parser_1["default"].json());
app.get('/', function (req, res) {
    console.log(req.body);
    res.send('Hello World!');
});
(0, users_1["default"])(app);
(0, products_1["default"])(app);
(0, orders_1["default"])(app);
app.listen(3000, function () {
    console.log("starting app on: ".concat(address));
});
