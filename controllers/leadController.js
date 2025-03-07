const Lead = require("../models/Lead");

// Create a new lead
exports.createLead = async (req, res) => {
    try {
        const { name, email, status } = req.body;
        const newLead = await Lead.create({ name, email, status });
        res.status(201).json(newLead);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all leads
exports.getLeads = async (req, res) => {
    try {
        const leads = await Lead.find();
        res.status(200).json(leads);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
