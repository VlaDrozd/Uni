const {Schema, model, Types} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const schema = new Schema({
    concern: {type: String, required: true},
    model: {type: String, required: true},
    fuel: {type: String, required: true},
    year: {type: Number, required: true},
    mileage: {type: Number, required: true},
    ownerID: {type: Types.ObjectId, ref: 'User', required: true},
    info: {type: String, required: true},
    created: {type: String, default: new Date(), required: true},
    price: {type: Number, required: true},
    active: {type: Boolean, required: true, default: true},
    photoPath: {type: String, ref: 'Photo', required: true}
})

schema.plugin(mongoosePaginate);

module.exports = model('Car', schema);