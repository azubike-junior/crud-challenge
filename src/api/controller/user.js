import User from "../../database/models/users";
import moment from "moment";

export const createUser = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).send({ message: "Please fill all fields" });
    }
    const { first_name, last_name, user_name, date_of_birth } = req.body;

    const user = new User({
      first_name,
      last_name,
      user_name,
      date_of_birth,
    });

    let username = await User.findOne({ user_name });
    if (username) {
      return res
        .status(400)
        .send({ message: "this username already exists.", status: 400 });
    }
    const response = await user.save();
    if (response) {
      return res.status(201).send({ message: "user created" });
    }
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    if (users) {
      return res.status(200).send({ users, status: 200 });
    }
    return res.status(404).send({ message: "users not found" });
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
};

export const removeUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndRemove(id);

    if (!deletedUser) {
      return res.status(404).send({ message: "user not found" });
    }
    const users = await User.find();
    return res.status(200).send({ message: "user deleted", users });
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
};
