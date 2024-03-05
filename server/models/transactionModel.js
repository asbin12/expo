import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    tenantsName: {
      type: String,
      required: [true, "Amount is required"],
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
    },
    type: {
      type: String,
      required: [true, "type is required"],
    },
    roomTypes: {
      type: String,
      required: [true, "Category is required"],
    },
    advanceAmount: {
      type: Number,
    },
    dueAmount: {
      type: Number,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
  },
  { timestamps: true }
);

const TransactionModel = mongoose.model("rent-details", transactionSchema);

export default TransactionModel;
