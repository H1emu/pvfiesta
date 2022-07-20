import { LoginServer } from "h1z1-server";

class ExampleLoginServer extends LoginServer {
  constructor(serverPort: number, mongoUrl: string) {
    super(serverPort, mongoUrl);

    this.LoginRequest = async (client, sessionId, fingerPrint) => {
      super.LoginRequest(client, sessionId, fingerPrint);
      console.log("someone has logged in");
    };
  }
}
const server = new ExampleLoginServer(
  1115, // <- server port
  process.env.MONGO_URL as string
);
server.start();
