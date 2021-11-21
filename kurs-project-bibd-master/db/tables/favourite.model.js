const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    userId: {type: Types.ObjectId, ref: 'User', required: true},
    carId: {type: Types.ObjectId, ref: 'Car', required: true},
    date: {type: String, required: true, default: new Date()},
});

module.exports = model('Favourite', schema);