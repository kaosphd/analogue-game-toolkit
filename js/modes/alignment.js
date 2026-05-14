function generateAlignment() {

  const pack = getPack();

  const outcome = pick(pack.learningOutcomes);
  const concept = pick(pack.concepts);
  const mechanic = pick(pack.mechanicBridges);
  const assessment = pick(pack.assessmentFrames);

  document.getElementById("alignment-output").innerHTML = `
    <div class="card">

      <h3>Alignment</h3>

      <p><strong>Learning Outcome:</strong> ${outcome}</p>
      <p><strong>Concept:</strong> ${concept}</p>
      <p><strong>Mechanic Bridge:</strong> ${mechanic}</p>
      <p><strong>Assessment:</strong> ${assessment}</p>

    </div>
  `;
}

window.generateAlignment = generateAlignment;
