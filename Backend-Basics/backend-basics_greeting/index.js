import { server } from "./server.js";
const PORT = 8080;

server.listen(PORT, () => {
  console.log(`server is runing at http://localhost:${PORT}`);
});
