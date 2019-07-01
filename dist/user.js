"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const uri = "mongodb+srv://leotm2010:7Rgzc9YjoPIi7MaY@leosplayground-ldzjr.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Succesfully Connected!");
    }
});

exports.UserSchema = new mongoose.Schema({
    id: Number,
    username: String,
    displayName: String,
    emailAddress: String,
    imageUrl: String,
    
    isActive: Boolean
}, {timestamps: true});

const User = mongoose.model("User", exports.UserSchema);
exports.default = User;
//# sourceMappingURL=user.js.map