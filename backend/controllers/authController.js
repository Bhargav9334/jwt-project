const User = require("../models/User");

const bcrypt = require("bcryptjs");

const generateToken = require(
  "../utils/generateToken"
);

const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role
    } = req.body;
    if (password.length < 6) {
  return res.status(400).json({
    success: false,
    message:
      "Password must be at least 6 characters"
  });
}

    const userExists = await User.findOne({
      email
    });

   if (userExists) {
  return res.status(400).json({
    success: false,
    message: "Email already registered"
  });
}

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(
      password,
      salt
    );

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role
    });

    const token = generateToken(
      user._id,
      user.role
    );

    res.status(201).json({
      token,
      user
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error"
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Credentials"
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Credentials"
      });
    }

    const token = generateToken(
      user._id,
      user.role
    );

    res.status(200).json({
  success: true,
  token,
  user
});
  } catch (error) {
    res.status(500).json({
      message: "Server Error"
    });
  }
};

module.exports = {
  registerUser,
  loginUser
};