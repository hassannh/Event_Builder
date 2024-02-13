import mongoose from 'mongoose';

const servicesSchema = new mongoose.Schema({
    
    personnelId: {  type: mongoose.Schema.Types.ObjectId, ref: 'Personnel' },
    toolsId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Tools' },
    foodId:{type: mongoose.Schema.Types.ObjectId, ref: 'Food' },
   
});

const Services = mongoose.model('Services', servicesSchema);

export default Services