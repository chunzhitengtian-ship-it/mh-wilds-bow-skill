export const bowSkillOptions = `
  <option value="">選択してください</option>
  <option value="skillA">スキルA</option>
  <option value="skillB">スキルB</option>
`;

export function InputForm() {
  return `
    <div class="form">
      <h2>弓スキル予測 — 入力フォーム</h2>

      <label>Round1 スキル</label>
      <select id="round1">${bowSkillOptions}</select>

      <label>Round2 スキル</label>
      <select id="round2">${bowSkillOptions}</select>

      <label>Round3 スキル</label>
      <select id="round3">${bowSkillOptions}</select>

      <label>EX効果</label>
      <input type="checkbox" id="exFlag">

      <button onclick="predict()">予測する</button>
    </div>
  `;
}
