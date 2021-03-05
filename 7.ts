import Koa from "koa";
const route = require("koa-route");
const app = new Koa();
const redirect = (ctx, next) => {
  ctx.response.redirect("/");
};
const index = (ctx, next) => {
  ctx.response.body = "我是 index 页面";
};
app.use(route.get("/main", redirect));
app.use(route.get("/", index));
app.listen(3000);
