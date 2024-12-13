
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema
({
    expenseName: { type: String, required: true },
    expenseDescription: { type: String, required: true },
    expenseAmount: { type: Number, required: true },
    expenseDate: { type: String, required: true },
    // user :
    // {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "UserSchema",
    //     required: true
    // }
});

module.exports = mongoose.model("ExpenseModel", ExpenseSchema);