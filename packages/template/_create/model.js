// Import required module and classes from the "sequelize" package.
// - `DataTypes`: Provides utility functions for defnining the types of attributes in a model.
import { DataTypes } from 'sequelize';

export default async function () {
  // Initialize the `ExampleModel` class with its attributes and configuration.
  const sequelize = frak.db.sequelize;

  const Example = sequelize.define(
    'Example',
    {
      name: DataTypes.STRING,
    },
    {}
  );

  await sequelize.sync();

  return Example;
}
