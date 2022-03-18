const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const appleCountShema = new mongoose.Schema({
  //   _id: mongoose.Types.ObjectId,
  user: {
    type: String,
    required: true,
  },
  appleCounts: [
    {
      count: {
        type: Number,
        required: true,
      },
      timeStamp: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('AppleCount', appleCountShema);
