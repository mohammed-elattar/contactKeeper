const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../models/user');

router.post(
  '/',
  [
    check('name', 'please add name').not().isEmpty(),
    check('email', 'please include a valid email').isEmail(),
    check(
      'password',
      'please enter a password with 6 or more charachters'
    ).isLength({ min: 6 }),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json({ msg: 'valid' });
  }
);

module.exports = router;
