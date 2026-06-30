import Fastify from "fastify";

import { config } from "./config.js";
import { healthRoute } from "./routes/health.js";
import { rootRoute } from "./routes/root.js";

export function buildApp() {
  const app = Fastify({
    logger: true,
  });

  app.register(rootRoute, {
    prefix: `/api/${config.apiVersion}`,
  });

  app.register(healthRoute, {
    prefix: `/api/${config.apiVersion}`,
  });

  return app;
}
