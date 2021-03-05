import Koa from "koa";
const app = new Koa();

const getPostData = (ctx) => {
  return new Promise((resolve, reject) => {
    try {
      let postData = "";
      ctx.req.addListener("data", (data) => {
        postData += data;
      });
      ctx.req.on("end", () => {
        resolve(postData);
      });
    } catch (error) {
      reject(error);
    }
  });
};
const parsePostData = (string: string) => {
  const data = {};
  const array = string.split("&");
  //由于 for of 无法获取的 index，所以配合 entries
  for (let [index, item] of array.entries()) {
    let arr = item.split("=");
    //对encodeURIComponent解码
    data[arr[0]] = decodeURIComponent(arr[1]);
  }
  return data;
};
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
      const postData = (await getPostData(ctx)) as string;
      const data = parsePostData(postData);
      ctx.body = data;
      break;
    default:
      ctx.body = "<h1>404</h1>";
  }
});

app.listen(3000);
