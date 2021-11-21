const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    phone: {type: String, required: true},
    price: {type: Number, required: true},
    ownerId: {type: Types.ObjectId, ref: 'User', required: true},
    carId: {type: Types.ObjectId, ref: 'Car', required: true},
    date: {type: String, required: true, default: new Date()},
    isOpened: {type: Boolean, required: true, default: true}
});

module.exports = model('Order', schema);