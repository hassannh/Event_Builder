import Tools from '../models/tools';

const createTools = async (req, res) => {
    const { type, quantity, price, available } = req.body;

    try {
        const newTools = new Tools({
            type,
            quantity: quantity || 0,
            price: price || 0,
            available: available || true,
        });

        const savedTools = await newTools.save();

        res.status(201).json(savedTools);
    } catch (error) {
        console.error('Error creating tools:', error.message);
        res.status(500).json({ error: 'Error creating tools' });
    }
};

export { createTools };
