import Koa from "koa";
const app = new Koa();
//中间件
app.use(async (ctx) => {
  ctx.body = "hello"; //返回hello
});
app.listen(3000); //监听3000端口
