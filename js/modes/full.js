function generateFull() {

  const pack = getPack();

  const game = {

    mechanic: pick(pack.mechanics),
    setting: pick(pack.settings),
    tone: pick(pack.tones)

  };

  document.getElementById("output").innerHTML = `
    <div class="card">
      <h3>Game Concept</h3>
      <p>${game.mechanic}</p>
      <p>${game.setting}</p>
      <p>${game.tone}</p>
    </div>
  `;
}

window.generateFull = generateFull;
