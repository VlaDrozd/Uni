const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    fileName: {type: String, required: true},
    carId: {type: Types.ObjectId, ref: 'Car', required: true},
    type: {type: String, required: true}
});

module.exports = model('Photo', schema);