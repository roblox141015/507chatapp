const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// 支援 JSON body
app.use(express.json());

// 提供 public 資料夾的檔案（包含 chat_app.html）
app.use(express.static("public"));

// 這裡放你的 API （註冊、登入、聊天邏輯...）
app.post("/api/register", (req, res) => {
  res.json({ success: true, message: "註冊成功" });
});

app.post("/api/login", (req, res) => {
  res.json({ success: true, message: "登入成功" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
