import Koa from "koa";
const app = new Koa();
//第一个中间件
app.use(async (ctx, next) => {
  //顺序1
  ctx.body = "hello";
  //跑到下一个中间件，此时当前函数进入等待期
  await next();
  //顺序3
  ctx.body = "qiuyanxi";
});
//第二个中间件
app.use(async (ctx, next) => {
  //顺序2
  ctx.set("Content-Type", "text/html;charset=utf-8");
  //跑回第一个中间件
  await next();
});
app.listen(3000);
