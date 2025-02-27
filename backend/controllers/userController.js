import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

// @desc Auth User & get Token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  console.log(req.body);
  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    // Set JWT as Http-Only cookie
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 100, // 30 days
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc Register a new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.send('register user');
});

// @desc Logout user / clear cookie
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send('logout user');
});

// @desc Get User Profile
// @route Get /api/users/profile
// @access Public
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('get user profile');
});

// @desc Update User Profile
// @route Put /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('update user profile');
});

// @desc Get users
// @route Get /api/users/profile
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send('get users');
});

// @desc Delete users
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteUsers = asyncHandler(async (req, res) => {
  res.send('delete users');
});

// @desc Get users by ID
// @route Get /api/users/:id
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send('get users');
});

// @desc Get users by ID
// @route PUT /api/users/:id
// @access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send('update users');
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUsers,
  getUserById,
  updateUser,
};
