import root from "./routes/root";
import Server from "./server";

const server = new Server([new root()]);
server.listen();
