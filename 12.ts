//12.ts
import Koa from "koa";
const app = new Koa();
const handler = async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    ctx.response.status = e.status;
    ctx.response.body = "报错了";
    app.emit("error", e);
  }
};
const main = (ctx) => {
  ctx.throw(500);
};
app.use(handler);
app.use(main);
app.on("error", (err, ctx) => console.log("报错信息", err));
app.listen(3000, () => {
  console.log("server is start");
});
