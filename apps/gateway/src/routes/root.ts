import type { FastifyInstance } from "fastify";

export async function rootRoute(app: FastifyInstance) {
  app.get("/", async () => {
    return {
      name: "GemOS Gateway",
      version: "1.0.0",
      environment: "development",
      status: "running",
    };
  });
}
