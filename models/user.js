module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [5],
        isEmail: true,    
        notEmpty: true      
      }
    },
    telephone: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isNumeric: true   
      }
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  });

  user.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    user.hasMany(models.orderinfo, {
      onDelete: "cascade"
    });
  };


  return user;
};