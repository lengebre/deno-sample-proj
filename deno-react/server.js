import { Application } from "https://deno.land/x/abc@v1.2.4/mod.ts";

const app = new Application();

console.log("http://localhost:8080/");

app
  .static("/", "build")
  .file("/", "build/index.html")
  .get("/hello", (c) => {
    return "Hello, Deno!";
  })
  .start({ port: 8080 });
