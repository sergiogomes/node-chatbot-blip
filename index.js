import * as BlipSdk from 'blip-sdk';
import * as WebSocketTransport from 'lime-transport-websocket'

const IDENTIFIER = 'bb83';
const ACCESS_KEY = 'b3ZrMk5mUFQwSWZZOGdtQkRUUHc=';

const client = new BlipSdk.ClientBuilder()
  .withIdentifier(IDENTIFIER)
  .withAccessKey(ACCESS_KEY)
  .withTransportFactory(() => new WebSocketTransport())
  .build();

// Connection will occurr via websocket on 8081 port asynchronously.
client.connect() // This method return a 'promise'.
  .then(function (session) {
    // Connection success. Now is possible send and receive envelopes from server. */
    console.log('Application started. Press Ctrl + c to stop.')
  })
  .catch(function (err) { /* Connection failed. */ });
