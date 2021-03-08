import Koa from "koa";
const statics = require("koa-static");
const path = require("path");
const app = new Koa();

const staticPath = "./static";
//把当前文件的目录名和./static 做拼接
app.use(statics(path.join(__dirname, staticPath)));
app.use(async (ctx) => {
  ctx.body = "hello";
});
app.listen(3000);
