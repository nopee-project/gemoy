import "dotenv/config";

import { buildApp } from "./app.js";
import { config } from "./config.js";

const app = buildApp();

const start = async () => {
  try {
    await app.listen({
      port: config.port,
      host: "0.0.0.0",
    });

    console.log("🚀 Gateway running at http://localhost:3000");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
