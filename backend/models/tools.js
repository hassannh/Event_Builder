import mongoose from 'mongoose';


const typeEnumValues = ['chair', 'table', 'camera'];

const toolsSchema = new mongoose.Schema({
    type: { type: String },
    enums: typeEnumValues
});

const Tools = mongoose.model('Tools', toolsSchema);

export default Tools