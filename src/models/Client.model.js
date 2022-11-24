import { Schema, model } from "mongoose";

//const ObjectId = mongoose.Schema.Types.ObjectId;

const ClientSchema = new Schema(
  {
    _id: {
      type: Number,
      required: true,
      inmutable: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Client", ClientSchema);
