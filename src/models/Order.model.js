import { Schema, model } from 'mongoose';

const OrderSchema = new Schema({
    clientId: {
        type: Number,
        required: true
    },
    menu: {
        type: [String],
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
}, {
    versionKey: false,
    timestamps: true
});

export default model('Order', OrderSchema);