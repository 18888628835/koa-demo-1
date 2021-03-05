//9.ts
import Koa from "koa";
const route = require("koa-route");

const app = new Koa();

const index = (ctx, next) => {
  ctx.response.status = 404;
};

app.use(route.get("/", index));
app.listen(3000);
