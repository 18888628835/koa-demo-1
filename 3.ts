import Koa from "koa";
const app = new Koa();
const fs = require("fs/promises");
const main = async function (ctx: any, next: () => void) {
  ctx.response.type = "html";
  ctx.response.body = await fs.readFile("./public/index.html", "utf-8");
};

app.use(main);
app.listen(3000);
