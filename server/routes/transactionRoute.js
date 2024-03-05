import express from "express";
import {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} from "../controllers/transactionController.js";

// Create a router object
const router = express.Router();

// Routes
// Add transaction
router.post("/add-transaction", addTransaction);

// Edit transaction
router.put("/edit-transaction", editTransaction);

// Delete transaction
router.delete("/delete-transaction", deleteTransaction);

// Get transaction
router.get("/get-transaction", getAllTransaction);

// Export the router
export default router;
