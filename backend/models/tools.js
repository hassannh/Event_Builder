import mongoose from 'mongoose';

const toolsSchema = new mongoose.Schema({
    
    chairId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chair' },
    tableId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Table' },
    lightsId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Lights' },
   
});

const Tools = mongoose.model('Tools', toolsSchema);

export default Tools