import Koa from "koa";
const Router = require("koa-router");

const app = new Koa();
//父路由
var forums = new Router();
//子路由
var posts = new Router();

posts.get("/", (ctx, next) => {
  ctx.body = "index";
});
posts.get("/:pid", (ctx, next) => {
  ctx.body = "id";
});
forums.use("/forums/:fid/posts", posts.routes(), posts.allowedMethods());

// responds to "/forums/123/posts" and "/forums/123/posts/123"
app.use(forums.routes());
app.listen(3000);
