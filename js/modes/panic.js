document.body.dataset.mode = "panic";

const PANIC = {

  idea: ["Start small.", "One mechanic only.", "Prototype immediately."],
  scope: ["Remove complexity.", "Limit components.", "Cut features."],
  weird: ["Add chaos rule.", "Break turn order.", "Hidden role exists."],
  prototype: ["Use paper only.", "Play a 5-minute version first."]
};

function panic(type) {

  document.body.classList.add("panic-mode");

  const result = pick(PANIC[type]);

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <p style="margin:0">${result}</p>
  `;

  document.getElementById("panic-output").prepend(card);
}

window.panic = panic;
