import Personnel from '../models/personnel';




const createPersonnel = async (req, res) => {
    const { type, quantity, price, available } = req.body;

    try {
        const newPersonnel = new Personnel({
            type,
            quantity: quantity || 0,
            price: price || 0,
            available: available || true,
        });

        const savedPersonnel = await newPersonnel.save();

        res.status(201).json(savedPersonnel);
    } catch (error) {
        console.error('Error creating personnel:', error.message);
        res.status(500).json({ error: 'Error creating personnel' });
    }
};

export { createPersonnel };
