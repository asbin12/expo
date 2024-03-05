import mongoose from 'mongoose';

// Schema design
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required and must be unique"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
}, { timestamps: true });

// Create and export the user model
const UserModel = mongoose.model('users', userSchema);
export default UserModel;
