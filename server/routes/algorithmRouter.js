const express = require('express');
const { get } = require('mongoose');

const {getAlgorithms, 
    getAlgorithmById, 
    getExplanationById, 
    createAlgorithm, 
    createExplanation
} = require('../controllers/algorithmControllers.js');

const router = express.Router();  

router.get('/', getAlgorithms);
router.get('/:id', getAlgorithmById);
router.get('/:id/:id', getExplanationById);
router.post('/', createAlgorithm);
router.post('/:id', createExplanation);


module.exports = router;