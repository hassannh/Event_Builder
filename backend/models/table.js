import mongoose from 'mongoose';

const tableSchema = new mongoose.Schema({
    
    price: { type: Number },
    picture:{type: String},
    description:{type: String},
    quentity:{type: Number},
});

const Table = mongoose.model('Table', tableSchema);

export default Table