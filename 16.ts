const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

const app = new Koa();
app.use(bodyParser());
app.use(async (ctx, next) => {
  switch (ctx.request.method) {
    case "GET":
      //显示表单页面
      let html = `
      <form action="/" method='POST'>
      <p>姓名</p>
    <input name="useName"/>
    <p>age</p>
    <input name="age"/>
    <button>提交</button>
    </form>
    `;
      ctx.body = html;
      break;
    case "POST":
      ctx.body = ctx.request.body;
      break;
    default:
      ctx.body = "<h1>404</h1>";
  }
});

app.listen(3000);
