import { DataTypes } from 'sequelize';

export default async function () {
  const sequelize = frak.db.sequelize;

  const Package = sequelize.define(
    'Package',
    {
      title: DataTypes.STRING,
      address: DataTypes.STRING,
      created: DataTypes.DATE,
    },
    {}
  );

  await sequelize.sync();

  return Package;
}
