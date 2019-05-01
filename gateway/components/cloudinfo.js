
const GraphQLComponent = require('graphql-component');

class CloudInfoComponent extends GraphQLComponent {
  constructor({ broker }) {

    const types = `
      type CloudInfo {
        ip: String
        name: String
      }
      type Query {
        whichcloud(ip: String!): CloudInfo
      }
    `;

    const resolvers = {
      Query: {
        whichcloud(_, { ip }) {
          return this._broker.call('whichcloud.query', { ip });
        }
      }
    };

    super({ types, resolvers });

    this._broker = broker;
  }
}

module.exports = CloudInfoComponent;