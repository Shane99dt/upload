const { User, Picture } = require("../models");

const checkIfUserExists = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      id: req.user.id,
    },
    include: Picture,
  });

  if (user) {
    req.user = user;
    next();
  } else {
    res.status(404).json([{ msg: "User not found" }]);
  }
};

module.exports = { checkIfUserExists };
