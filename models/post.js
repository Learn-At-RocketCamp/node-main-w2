const mongoose = require('mongoose');
// const Schema = require('mongoose');

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '作者姓名未填寫'],
  },
  content: {
    type: String,
    required: [true, '內文未填寫'],
  },
  /** end of Schema-required */

  image: {
    type: String,
    default: '',
  },
  /** end of Schema-default */

  likes: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

module.exports = mongoose.model('Post', PostSchema);
