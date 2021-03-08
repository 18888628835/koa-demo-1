import Koa from "koa";
const app = new Koa();
app.use(async (ctx) => {
  if (ctx.url === "/") {
    ctx.body = "设置好 cookie 了";
    ctx.cookies.set("name", "qiuyanxi", {
      domain: "127.0.0.1", //域名
      path: "index", //路径
      maxAge: 60000, //有效时间
      httpOnly: true, //能否被 js 获取
      overwrite: false, //是否允许重写
    });
  }
});
app.listen(3000);
