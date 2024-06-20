import { server } from "./bootstrap/server.js";
import appConfig from "./lib/config/app.config.js";
import Database from "./lib/config/db.config.js";

(() => {
  try {
    // start the server connect to database and any other thing before the application starts
    new Database();
    server.listen(appConfig.port, () =>
      console.log("Server is running on " + appConfig.port)
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
