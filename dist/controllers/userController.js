"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./../user");
// We'll start with allUsers which will return
// every we have from our database
exports.allUsers = (req, res) => {
    let users = user_1.default.find((err, users) => {
        if (err) {
            res.send("Error!");
        }
        else {
            res.send(users);
        }
    });
};
exports.getUser = (req, res) => {
    let user = user_1.default.findById(req.params.id, (err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(user);
        }
    });
};
exports.deleteUser = (req, res) => {
    let user = user_1.default.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully Deleted User");
        }
    });
};
exports.updateUser = (req, res) => {
    console.log(req.body);
    let user = user_1.default.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully updated user!");
        }
    });
};
exports.addUser = (req, res) => {
    var user = new user_1.default(req.body);
    user.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(user);
        }
    });
};
//# sourceMappingURL=userController.js.map