import Koa from "koa";
const app = new Koa();

app.use((ctx: any, next: () => void) => {
  if (ctx.request.path === "/") {
    ctx.response.body = "hello";
  }
  if (ctx.request.path === "/app") {
    ctx.response.body = "world";
  }
});

app.listen(3000);
