const mongoose = require('mongoose');
const AppleCount = require('../models/AppleCount');

//create user with apple count
const createAppleCount = (req, res) => {
  //   console.log(req.body);
  const appleCount = new AppleCount({
    // _id: mongoose.Schema.Types.ObjectId,
    user: req.body.user,
    appleCounts: [
      {
        count: req.body.count,
        timeStamp: req.body.timeStamp,
      },
    ],
  });
  return appleCount
    .save()
    .then((newAppleCount) => {
      return res.status(201).json({
        message: 'New count created successfully',
        appleCount: newAppleCount,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Server error. Please try again.',
        error: error.message,
      });
    });
};

//find all users
const findAll = (req, res) => {
  AppleCount.find()
    .select('_id user appleCount')
    .then((users) => {
      return res.status(200).json({
        message: 'List all apple counts',
        users: users,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Server error',
        error: error.message,
      });
    });
};

module.exports = { createAppleCount, findAll };
