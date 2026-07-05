export default function handler(req, res) {
  const { round1, round2, round3, exFlag } = req.body;

  const result = {
    skill: "仮スキル",
    probability: 42,
    confidence: 80,
    exRate: exFlag ? 30 : 10
  };

  res.status(200).json(result);
}
