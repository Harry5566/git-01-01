import express from "exprss";

const app = express();

app.get("/", (req, res) => {
  res.send("首頁 dev 123456");
});

app.listen(3005, () => {});
