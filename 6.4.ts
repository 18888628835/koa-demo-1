import Koa from "koa";
const Router = require("koa-router");
const app = new Koa();
const router = new Router();

router.get("/:title/:id", (ctx, next) => {
  ctx.body = ctx.params;
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
