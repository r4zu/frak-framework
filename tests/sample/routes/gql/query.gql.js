const typeDefs = `
  scalar Date
  type Package {
    title: String,
    address: String,
    created: Date,
  }
  type Query {
    packages: [Package]
  }
`;

const resolvers = {
  Query: {
    packages: async () => {
      const packages = await frak.models['package'].findAll();
      frak.logger.info(`Found packages ${JSON.stringify(packages)}`);
      return packages;
    },
  },
};
export { typeDefs, resolvers };
