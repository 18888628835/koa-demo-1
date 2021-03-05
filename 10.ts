import Koa from "koa";
const app = new Koa();

const handler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500;
  }
};
const index = async (ctx, next) => {
  ctx.response.body = "你好";
  await next();
};

const main = (ctx, next) => {
  ctx.response.status = 404;
};
app.use(handler);
app.use(index);
app.use(main);
app.listen(3000);
