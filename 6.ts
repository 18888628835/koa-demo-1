//6.ts
import Koa from "koa";
const app = new Koa();
const route = require("koa-route");

const main = (ctx, next) => {
  ctx.response.body = "main 加载";
};

const index = (ctx, next) => {
  ctx.response.body = "index 加载";
};

app.use(route.get("/", index));
app.use(route.get("/main", main));
app.listen(3000);
