import { InputForm } from "./components/InputForm.js";
import { ResultView } from "./components/ResultView.js";

document.getElementById("app").innerHTML = InputForm();

window.predict = async () => {
  const body = {
    round1: document.getElementById("round1").value,
    round2: document.getElementById("round2").value,
    round3: document.getElementById("round3").value,
    exFlag: document.getElementById("exFlag").checked
  };

  const res = await fetch("/api/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  const result = await res.json();
  document.getElementById("app").innerHTML = ResultView(result);
};
export default function Home() {
  return <h1>MH Wilds Bow Skill Predictor</h1>;
}
