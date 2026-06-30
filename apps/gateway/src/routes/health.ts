import type { FastifyInstance } from "fastify";

export async function healthRoute(app: FastifyInstance) {
  app.get("/health", async () => {
    return {
      service: "gateway",
      status: "ok",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  });
}
