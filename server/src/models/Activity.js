const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5'),
      allowNull: false,
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    season:{
        type: DataTypes.ENUM('Summer', 'Fall', 'Winter', 'Spring'),
        allowNull: false
    }
  },
  {
    timestamps: false
  }
  );
};