const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/user');
const Contact = require('../models/contact');

router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

router.post('/', (req, res) => {
  res.send('Add new contact');
});

router.put('/:id', (req, res) => {
  res.send('Update contact');
});

router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
