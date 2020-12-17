const BlipSdk = require('blip-sdk')
const WebSocketTransport = require('lime-transport-websocket')

const IDENTIFIER = 'bb83';
const ACCESS_KEY = 'b3ZrMk5mUFQwSWZZOGdtQkRUUHc=';

const client = new BlipSdk.ClientBuilder()
  .withIdentifier(IDENTIFIER)
  .withAccessKey(ACCESS_KEY)
  .withTransportFactory(() => new WebSocketTransport())
  .build();

// Connection will occurr via websocket on 8081 port asynchronously.
client.connect()
  .then((session) => {
    // Connection success. Now is possible send and receive envelopes from server. */
    console.log('Application started. Press Ctrl + c to stop.');
    console.log(session);
    const msg = {
      type: 'text/plain',
      content: 'Hello there!',
      to: '4e96cd56-b2ea-49a6-b579-4449f8df24cd.bb83@0mn.io/default'
    };
    client.sendMessage(msg);
  })
  .catch((err) => {
    /* Connection failed. */
    console.error(err);
  });

client.addMessageReceiver(true, (message) => {
  console.log(message);
});
