require("dotenv").config({ path: "./database/dbConfig.env" });
const express = require("express");
const app = express();
const port = 3000;

console.log(process.env.DB_NAME);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/hello", (req, res) => {
  console.log(req.url);
  res.send("Hello World!");
});

app.get("/api/board", (req, res) => {
  res.send({ title: "노드 api 서버 update!!!!" });
});

const path = require("path");
const publicPath = path.join(__dirname, "dist"); // __dirname = 절대경로
app.use(express.static(publicPath));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./dist", "index.html")); // ./dist 상대경로
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "./dist", "index.html")); // 파일의 경로를 연결한 router는 index.html에 존재하기에 경로를 middleware로 연결
});
