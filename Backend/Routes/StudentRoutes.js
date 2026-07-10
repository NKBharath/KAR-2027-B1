const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const { addStudent } = require('../Controller/studentcontroller');

router.post('/addstudent', addStudent);

module.exports = router;