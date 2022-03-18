const express = require('express');
const { createAppleCount, findAll } = require('../controllers/appleCounts');

const router = express.Router();

router.post('/apple-count', createAppleCount);
router.get('/apple-count', findAll);

module.exports = router;
