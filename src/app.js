// ページ読み込み時に動作
window.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  // 表示内容を生成
  const message = document.createElement("div");
  message.textContent = "ようこそ！スキル予測ラボへ。";
  message.style.fontSize = "1.2rem";
  message.style.marginTop = "20px";

  app.appendChild(message);
});
