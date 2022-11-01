module.exports = (Sequelize, DataTypes) => {
  const Schedules = Sequelize.define(
    'Schedules',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM,
        values: ['1', '2'],
        allowNull: false,
        defaultValue: '1',
      },
      startDate: {
        field: 'start_date',
        type: DataTypes.DATE,
        allowNull: true,
      },
      endDate: {
        field: 'end_date',
        type: DataTypes.DATE,
        allowNull: true,
      },
      createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: 'schedules',
      timestamps: true,
    }
  );

  return Schedules;
};
