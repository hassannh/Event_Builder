import Snacks from '../models/snacks';

const createSnacks = async (req, res) => {
    const { type, quantity, price, available } = req.body;

    try {
        const newSnacks = new Snacks({
            type,
            quantity: quantity || 0,
            price: price || 0,
            available: available || true,
        });

        const savedSnacks = await newSnacks.save();

        res.status(201).json(savedSnacks);
    } catch (error) {
        console.error('Error creating snacks:', error.message);
        res.status(500).json({ error: 'Error creating snacks' });
    }
};

export { createSnacks };
