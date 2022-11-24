import { Schema, model } from "mongoose";

const OrderSchema = new Schema(
  {
    clientId: {
      type: Number,
      required: true,
    },
    menu: {
      type: [Number],
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
    notes: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Order", OrderSchema);
