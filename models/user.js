const { Schema, model } = require('mongoose');
const moment = require('.moment');

// Schema to create Student model
const Users = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: 'Thought'  
    },
    friends: {
        type: Schema.Types.ObjectId,
        ref: 'User'  
      },
    
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  }
);
UserSchema.virtual('friendCount').get(function(){
    return this.friends.length;
})

const Student = model('user', UserSchema);

module.exports = User;