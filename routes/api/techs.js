const express = require('express');
const router = express.Router();

// Item Model
const Tech = require('../../models/Tech');


// @route   GET api/techs
// @desc    Get All techs
// @access  Public
router.get('/', (req, res) => {
    Tech.find()
        .sort({ date: -1 })
        .then(techs => res.json(techs));
});

// @route   POST api/techs
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
    const newTech = new Tech({
        name: req.body.name,
        totalSales: req.body.totalSales,
        totalJobs: req.body.totalJobs,
        jobsSold: req.body.jobsSold,
    });

    newTech.save().then(tech => res.json(tech));
});

// @route   DELETE api/techs/:id
// @desc    Delete A Item
// @access  Public
router.delete('/:id', (req, res) => {
    Tech.findById(req.params.id)
        .then(tech => tech.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;