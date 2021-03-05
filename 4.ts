import Koa from "koa";
const app = new Koa();
const compose = require("koa-compose");

const logger = (ctx: any, next: () => void) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  next();
};

const main = (ctx: any) => {
  ctx.response.body = "Hello World";
};

const middleWares = compose([logger, main]);
app.use(middleWares);
app.listen(3000);
