window.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("skillInput");
  const button = document.getElementById("predictBtn");
  const result = document.getElementById("result");

  button.addEventListener("click", () => {
    const skill = input.value.trim();
    result.innerHTML = "";

    if (!skill) {
      showResult("スキル名を入力してください。", "error");
      return;
    }

    // 正規化（空白除去・ひらがな化などの簡易処理）
    const key = normalizeSkill(skill);

    // 仮の予測ロジック（後でAI連携可能）
    let prediction;
    switch (key) {
      case "ためだんかいかいほう":
      case "ためだんかい":
      case "溜め段階解放":
        prediction = "攻撃力が上昇し、矢の威力が強化されます。";
        break;
      case "だんどうきょうか":
      case "弾導強化":
        prediction = "矢の飛距離が伸び、命中精度が向上します。";
        break;
      case "すたみなきゅうそくかいふく":
      case "スタミナ急速回復":
        prediction = "連射後のスタミナ回復速度が上昇します。";
        break;
      case "たいじゅつ":
      case "体術":
        prediction = "回避や溜め中のスタミナ消費が軽減されます。";
        break;
      case "しゅうちゅう":
      case "集中":
        prediction = "溜め時間が短縮され、攻撃テンポが向上します。";
        break;
      default:
        prediction = "未知のスキルです。データベースに登録されていません。";
    }

    const type = prediction.includes("未知のスキル") ? "error" : "success";
    showResult(`予測結果：${prediction}`, type);
  });

  function normalizeSkill(text) {
    // 簡易正規化：全角スペース削除、小文字化、ひらがな化の簡易対応
    let s = text.replace(/\s+/g, "").toLowerCase();
    // かな変換の簡易マップ（必要に応じて拡張）
    const map = {
      "ためだんかいかいほう": "ためだんかいかいほう",
      "ためだんかい": "ためだんかいかいほう",
      "だんどうきょうか": "だんどうきょうか",
      "すたみなきゅうそくかいふく": "すたみなきゅうそくかいふく",
      "たいじゅつ": "たいじゅつ",
      "しゅうちゅう": "しゅうちゅう"
    };
    // そのまま返す（将来的に形態素解析や辞書を使う）
    return map[s] || s;
  }

  function showResult(message, type) {
    const card = document.createElement("div");
    card.className = `result-card ${type}`;

    const heading = document.createElement("div");
    heading.style.fontWeight = "700";
    heading.style.marginBottom = "6px";
    heading.textContent = type === "error" ? "予測失敗" : "予測完了";

    const body = document.createElement("div");
    body.textContent = message;

    card.appendChild(heading);
    card.appendChild(body);
    result.appendChild(card);
    card.scrollIntoView({behavior:"smooth"});
  }
});
