"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (res) {
    var id = res.data.id;
    var title = res.data.title;
    var completed = res.data.completed;
    console.log("\n    My id: ".concat(id, "\n    My title: ").concat(title, "\n    My completed: ").concat(completed, "\n  "));
});
