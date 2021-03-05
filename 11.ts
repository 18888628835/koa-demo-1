//11.ts
import Koa from "koa";
const app = new Koa();

const main = (ctx) => {
  ctx.throw(500);
};
app.use(main);
app.on("error", (err, ctx) => console.log("err", err));
app.listen(3000, () => {
  console.log("server is start");
});
