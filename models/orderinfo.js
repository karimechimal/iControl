module.exports = function(sequelize, DataTypes) {
  var orderinfo = sequelize.define("orderinfo", {
    img: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],    
        notEmpty: true,
        isNumeric: true       
      }
    },
    color: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]  
      }
    },
    talla: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    marca: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tipo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    precio: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },

  });

  orderinfo.associate = function (models) {
    orderinfo.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };


  return orderinfo;
};