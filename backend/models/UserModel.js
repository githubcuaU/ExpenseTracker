
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// plugin which adds pre-save validation for unique fields within a Mongoose scheme
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new Schema
({
    // the unique key is not a validator, which means it's possible to create 2 users with the same email
    // use the mongoose-unique-validator to resolve this issue

    email: { type: String, required: true, unique: true }, 
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    expenses :
    {
        type: mongoose.Schema,
        ref: "ExpenseSchema",
        required: true
    },
});

users.plugin(uniqueValidator);

module.exports = mongoose.model("UserModel", UserSchema);