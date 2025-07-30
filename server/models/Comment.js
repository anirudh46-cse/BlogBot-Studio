import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  blogId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog',
  },
  author: {
  type :  String,
  required: false,
  default: 'Anonymous'
  },
  content:{
    type : String,
    required: true,
    minlength : 1
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
});
commentSchema.pre('save', function(next) {
  if(!this.author) {
    this.author = 'Anonymous';}
    next();
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;