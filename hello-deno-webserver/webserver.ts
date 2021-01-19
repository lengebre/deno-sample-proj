/**
 * webserver.ts
 */
import { serve } from "https://deno.land/std@0.83.0/http/server.ts";

const server = serve({ hostname: "0.0.0.0", port: 8080 });

console.log(`HTTP webserver running.  Access it at:  http://localhost:8080/`);

for await (const request of server) {
  const bodyContent = `Welcome to Deno: Request Method = ${request.method}`;

  request.respond({ status: 200, body: bodyContent });
}
