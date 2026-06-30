import { config } from "../config.js";
import type { FastifyInstance } from "fastify";

export async function rootRoute(app: FastifyInstance) {
  app.get("/", async () => {
    return {
      name: config.serviceName,
      version: config.serviceVersion,
      environment: config.nodeEnv,
      status: "running",
    };
  });
}
