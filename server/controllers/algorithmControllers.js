const Algorithm = require('../models/algorithmModel'); 
const Explanation = require('../models/explanationModel');
const mongoose = require('mongoose');

const getAlgorithms = async (req, res) => {
    const algs = await Algorithm.find({}).sort({ createdAt: -1 });
    res.status(200).json(algs);
}

const getExplanations = async (id) => {
    const explanations =  await Explanation.find({ algorithmID: id }).sort({ createdAt: -1 });
    return explanations;
}

const getAlgorithmById = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid algorithm ID' });
    }

    const alg = await Algorithm.findById(id);
    
    if (!alg) {
        return res.status(404).json({ error: 'Algorithm not found' });
    }

    const expl = await getExplanations(id);
    
    res.status(200).json({alg, expl});  
}

const createAlgorithm = async (req, res) => {
    const { name, description, input, output } = req.body;  //, user

    try {
        const alg = await Algorithm.create({ name, description, input, output });  //, user
        res.status(200).json(alg);  
    } catch (error) {
        return res.status(400).json({ error: error.message });  
    }
}

const getExplanationById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid explanation ID' });
    }

    const expl = await Explanation.findById(id);
    
    if (!expl) {
        return res.status(404).json({ error: 'Explanation not found' });
    }

    res.status(200).json(expl); 
}

const createExplanation = async (req, res) => {
    const { id } = req.params;
    const { name, explanation, code } = req.body;

    try {
        const expl = await Explanation.create({ name, explanation, code, algorithmID: id });  //, user
        res.status(200).json(expl);  
    } catch (error) {
        return res.status(400).json({ error: error.message });  
    }
}

module.exports = {
    getAlgorithms, 
    getAlgorithmById, 
    getExplanationById, 
    createAlgorithm,
    createExplanation
}