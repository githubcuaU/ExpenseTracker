
const express = require("express");
const router = express();
const expenseController = require("../controllers/expenseController");

router
    .route("/")
    .get(expenseController.getAllExpenses)
    .post(expenseController.createExpense)
    .put(expenseController.updateExpense)
    .delete(expenseController.deleteExpense);

router.route("/:expenseID").get(expenseController.getOneExpense);

module.exports = router;