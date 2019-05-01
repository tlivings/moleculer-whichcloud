
const { ApolloServer } = require('apollo-server');
const { ServiceBroker } = require("moleculer");
const CloudInfoComponent = require('./components/cloudinfo');

const broker = new ServiceBroker({
  nodeID: 'node-gateway',
  transporter: 'nats://nats-server:4222',
  logLevel: 'info',
  cacher: 'memory'
});

const { schema, context } = new CloudInfoComponent({ broker });

const server = new ApolloServer({
  schema,
  context
});

broker.start().then(() => {
  return server.listen();
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});