window.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("skillInput");
  const button = document.getElementById("predictBtn");
  const result = document.getElementById("result");

  button.addEventListener("click", () => {
    const skill = input.value.trim();

    if (!skill) {
      result.textContent = "スキル名を入力してください。";
      result.style.color = "red";
      return;
    }

    // 仮の予測ロジック（後でAI連携可能）
    let prediction;
    switch (skill.toLowerCase()) {
      case "溜め段階解放":
        prediction = "攻撃力が上昇し、矢の威力が強化されます。";
        break;
      case "弾導強化":
        prediction = "矢の飛距離が伸び、命中精度が向上します。";
        break;
      case "スタミナ急速回復":
        prediction = "連射後のスタミナ回復速度が上昇します。";
        break;
      default:
        prediction = "未知のスキルです。データベースに登録されていません。";
    }

    result.textContent = `予測結果：${prediction}`;
    result.style.color = "#333";
  });
});
