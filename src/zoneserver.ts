import { ZoneServer } from "h1z1-server";

class ExampleZoneServer extends ZoneServer {
  constructor(
    serverPort: number,
    gatewayKey: Uint8Array,
    mongoAddress?: string,
    worldId?: number
  ) {
    super(serverPort, gatewayKey, mongoAddress, worldId);
    this._pingTimeoutTime = 120000; // change ping timemout time
  }
}
const server = new ExampleZoneServer(
  1117,
  Buffer.from("F70IaxuU8C/w7FPXY1ibXw==", "base64"),
  process.env.MONGO_URL,
  Number(process.env.WORLD_ID)
);

server.start();
