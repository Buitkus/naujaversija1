const User = require(`../models/User`);

// Register new User
// ROUTE POST /api/users
// ACCESS PUBLIC

const createUser = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password)
    res.status(404).send("Not found");

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const result = await user.save();
  res.status(200).send(result);
};

// get Users
// ROUTE GET /api/users
// ACCESS PUBLIC

const getUsers = async (req, res) => {
  const result = await User.find();
  res.send(result);
};

// @desc get user by name
// @route GET /api/userbyname
// @access PUBLIC

const getUserByName = async (req, res) => {
  const result = await User.find({ name: req.body.name });
  res.send(result);
};

// @desc get user by ID
// @route GET /api/user/:id
// @access PUBLIC

const getUserById = async (req, res) => {
  const result = await User.find({ _id: req.params.id });
  res.send(result);
};

// @desc update user by ID
// @route PUT /api/user/:id
// @access PUBLIC

const updateUser = async (req, res) => {
  const result = await User.updateOne(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        password: req.body.password,
      },
    }
  );
  res.send(result);
};

// @desc delete user by ID
// @route DELETE /api/user/:id
// @access PUBLIC

const deleteUserByID = async (req, res) => {
  const result = await User.deleteOne({_id: req.params.id});
  res.send(result);
}


module.exports = {
  createUser,
  getUsers,
  getUserByName,
  getUserById,
  updateUser,
  deleteUserByID
};
