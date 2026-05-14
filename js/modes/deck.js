// =========================
// DECK MODE (V2+ RESTORE)
// =========================

document.body.dataset.mode = "deck";

function drawElement(type) {

  const pack = getPack();

   if (!pack[type]) {
    console.warn("Missing pack category:", type);
    return;
  }
  
  const value = pick(pack[type]);

  const card = document.createElement("div");
  card.className = "table-card";

  card.dataset.type = type;
  card.dataset.pinned = "false";

  card.innerHTML = `
    <div class="card-top">
      <span class="card-type">${type.toUpperCase()}</span>

      <div class="card-controls">
        <button onclick="rerollCard(this)">🔄</button>
        <button onclick="pinCard(this)">📌</button>
      </div>
    </div>

    <div class="card-content">${value}</div>
  `;

  document.getElementById("table").prepend(card);
}

// -------------------------
// SINGLE REROLL
// -------------------------

function rerollCard(btn) {

  const card = btn.closest(".table-card");
  if (card.dataset.pinned === "true") return;

  const pack = getPack();
  const type = card.dataset.type;

  card.querySelector(".card-content").innerText =
    pick(pack[type]);
}

// -------------------------
// REROLL ALL UNPINNED
// -------------------------

function rerollAllUnpinned() {

  const cards = document.querySelectorAll(".table-card");

  cards.forEach(card => {

    if (card.dataset.pinned === "true") return;

    const pack = getPack();
    const type = card.dataset.type;

    card.querySelector(".card-content").innerText =
      pick(pack[type]);
  });
}

// -------------------------
// PIN SYSTEM
// -------------------------

function pinCard(btn) {

  const card = btn.closest(".table-card");

  const isPinned = card.dataset.pinned === "true";

  card.dataset.pinned = (!isPinned).toString();

  card.classList.toggle("pinned");

// optional: update aria hint for future accessibility polish
card.setAttribute(
  "data-pin-state",
  card.dataset.pinned
);
}

// -------------------------
// CLEAR
// -------------------------

function clearTable() {
  document.getElementById("table").innerHTML = "";
}

// -------------------------
// EXPORT
// -------------------------

function exportTable() {

  const cards = document.querySelectorAll(".table-card");

  let output = "GAME ELEMENT DESIGN STUDIO\n\n";

  cards.forEach(card => {

    const type = card.dataset.type.toUpperCase();
    const content = card.querySelector(".card-content").innerText;

    output += `${type}: ${content}\n`;
  });

  navigator.clipboard.writeText(output);
  alert("Copied to clipboard!");
}

// -------------------------
// GLOBALS
// -------------------------

window.drawElement = drawElement;
window.rerollCard = rerollCard;
window.rerollAllUnpinned = rerollAllUnpinned;
window.pinCard = pinCard;
window.clearTable = clearTable;
window.exportTable = exportTable;
