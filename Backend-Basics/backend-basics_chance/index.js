import { server } from "./server.js";

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`server is run at http://localhost:${PORT}`);
});
