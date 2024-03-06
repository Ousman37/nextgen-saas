// Importing necessary functions from mongoose
import { Schema, model, models } from "mongoose";

// Defining the Mongoose Schema for a Transaction
const TransactionSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  plan: {
    type: String,
  },
  credits: {
    type: Number,
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

// Using models to check if the Transaction model already exists, to prevent overwrite error
const Transaction =
  models?.Transaction || model("Transaction", TransactionSchema);

export default Transaction;
