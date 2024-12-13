
const ExpenseModel = require("../models/ExpenseModel");
  
// Get all expenses
const getAllExpenses = async (req, res) => 
{
    const expenses = await ExpenseModel.find();
    if (!expenses) 
    {
        return res.status(400).json({ message: "No expenses are found!" });
    }
    res.json(expenses);
};

// Get a single expense
const getOneExpense = async (req, res) => 
{
    if (!req?.params?.expenseID) 
    {
        return res.status(400).json({ message: "Expense ID is required!" });
    }

    const expense = await ExpenseModel.findOne({ _id: req.params.expenseID }).exec();

    if (!expense) 
    {
        res
        .status(400)
        .json({ message: `No expense matches with ID ${req.params.expenseID} ` });
    }
    res.json(expense);
};


// Create expense
const createExpense = async (req, res) => 
{
    try 
    {
        const result = await ExpenseModel.create
        ({
            expenseName: req.body.expenseName,
            expenseDescription: req.body.expenseDescription,
            expenseAmount: req.body.expenseAmount,
            expenseDate: req.body.expenseDate
        });
        res.status(201).json(result);
    } 
    catch (error) 
    {
        console.log(error);
    }
};


// Update expense
const updateExpense = async (req, res) => 
{
    if (!req.body?.expenseID) 
    {
        return res.status(400).json({ message: "Expense ID is required!" });
    }

    const expense = await ExpenseModel.findOne({ _id: req.body.expenseID }).exec();

    if (!expense) 
    {
        res
        .status(400)
        .json({ message: `No expense matches with ID ${req.body.expenseID}` });
    }

    if (req.body.expenseName) 
        expense.expenseName = req.body.expenseName;
    if (req.body.expenseDescription) 
        expense.expenseDescription = req.body.expenseDescription;
    if (req.body.expenseAmount) 
        expense.expenseAmount = req.body.expenseAmount;
    if (req.body.expenseDate) 
        expense.expenseDate = req.body.expenseDate;

    const result = await expense.save();
    res.json(result);
};


// Delete expense
const deleteExpense = async (req, res) => 
{
    if (!req.body?.expenseID) 
    {
        return res.status(400).json({ message: "Expense ID is required!" });
    }

    const expense = await ExpenseModel.findOne({ _id: req.body.expenseID }).exec();

    if (!expense) 
    {
        res
        .status(400)
        .json({ message: `No expense matches with ID ${req.body.expenseID}` });
    }

    const result = await ExpenseModel.deleteOne({ _id: req.body.expenseID });
    res.json(result);
};


module.exports = 
{
    getAllExpenses,
    getOneExpense,
    createExpense,
    updateExpense,
    deleteExpense,
};