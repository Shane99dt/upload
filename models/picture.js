const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const Picture = sequelize.define("Picture", {
    url: {
      type: DataTypes.TEXT
    },
  })

  return Picture
}
