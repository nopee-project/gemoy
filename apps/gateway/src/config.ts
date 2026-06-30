export const config = {
  port: Number(process.env.PORT ?? 3000),
  nodeEnv: process.env.NODE_ENV ?? "development",
  serviceName: process.env.SERVICE_NAME ?? "GemOS Gateway",
  serviceVersion: process.env.SERVICE_VERSION ?? "1.0.0",
  apiVersion: "v1",
};
