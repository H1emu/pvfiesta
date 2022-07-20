import { ZoneServer2016 } from "h1z1-server";
import { ZoneClient2016 } from "h1z1-server/out/servers/ZoneServer2016/classes/zoneclient";
const spawns = require("../data/spawns.json");
class PvFiestaServer extends ZoneServer2016 {
  constructor(
    serverPort: number,
    gatewayKey: Uint8Array,
    mongoAddress?: string,
    worldId?: number
  ) {
    super(serverPort, gatewayKey, mongoAddress, worldId);
    this._spawnLocations = spawns;
    this.loadCharacterData = async (client:ZoneClient2016)=>{
      await super.loadCharacterData(client)
      this.giveKitItems(client)
    }
  }
}
const server = new PvFiestaServer(
  1117,
  Buffer.from("F70IaxuU8C/w7FPXY1ibXw==", "base64"),
  process.env.MONGO_URL,
  Number(process.env.WORLD_ID)
);
server.start();
