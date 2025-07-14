const express = require('express');
const router = express.Router();

// Dummy controller for now
router.get('/convert', (req, res) => {
    res.json({ message: 'Currency conversion works!' });
});

module.exports = router;