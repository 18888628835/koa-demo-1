import Koa from "koa";
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router
  .get("/", (ctx, next) => {
    ctx.body = "index";
  })
  .get("/main", (ctx, next) => {
    ctx.body = "main";
  });
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
