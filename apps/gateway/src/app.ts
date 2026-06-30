import Fastify from "fastify";

import { healthRoute } from "./routes/health.js";
import { rootRoute } from "./routes/root.js";

export function buildApp() {
  const app = Fastify({
    logger: true,
  });

  app.register(rootRoute);
  app.register(healthRoute);

  return app;
}
