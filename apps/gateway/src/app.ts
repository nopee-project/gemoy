import Fastify from "fastify";

export function buildApp() {
  const app = Fastify({
    logger: true,
  });

  app.get("/", async () => {
    return {
      name: "GemOS Gateway",
      version: "1.0.0",
      environment: "development",
      status: "running",
    };
  });

  app.get("/health", async () => {
    return {
      service: "gateway",
      status: "ok",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  });

  return app;
}
