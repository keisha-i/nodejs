const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render ('index');
});

router.get('/about', (res, render) => {
    res.render ('about');
});

router.get('/contact', (req, res) => {
    res.render ('contact');
});

router.get('/gallery', (req, res) => {
    res.render ('gallery');
});

router.get('/services',(req, res) => {
    res.render('services');
});

module.exports = router;