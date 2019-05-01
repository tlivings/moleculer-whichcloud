
const { ServiceBroker } = require('moleculer');
const WhichCloud = require('which-cloud');

const broker = new ServiceBroker({
  nodeID: 'which-cloud',
  transporter: 'nats://nats-server:4222',
  logLevel: 'info',
  cacher: 'memory'
});

broker.createService({
  name: 'whichcloud',
  actions: {
    query({ params }) {
      const { ip } = params;
      
      return new Promise((resolve, reject) => {
        WhichCloud(ip, (error, name) => {
          if (error) {
            reject(error);
            return;
          }
          resolve({ ip, name });
        });
      });
    }
  }
});

broker.start();