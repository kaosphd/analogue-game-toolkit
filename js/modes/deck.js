// =========================
// DECK MODE
// =========================

function drawElement(type) {

  const pack = getPack();
  const value = pick(pack[type]);

  const card = document.createElement("div");
  card.className = "table-card";

  card.dataset.type = type;
  card.dataset.pinned = "false";

  card.innerHTML = `
    <div class="card-top">

      <span class="card-type">
        ${type.toUpperCase()}
      </span>

      <div class="card-controls">

        <button onclick="rerollCard(this)">🔄</button>
        <button onclick="pinCard(this)">📌</button>

      </div>

    </div>

    <div class="card-content">
      ${value}
    </div>
  `;

  document.getElementById("table").prepend(card);
}

function rerollCard(btn) {

  const card = btn.closest(".table-card");
  if (card.dataset.pinned === "true") return;

  const pack = getPack();
  const type = card.dataset.type;

  card.querySelector(".card-content").innerText =
    pick(pack[type]);
}

function rerollAll() {

  const cards = document.querySelectorAll(".table-card");

  cards.forEach(card => {

    if (card.dataset.pinned === "true") return;

    const pack = getPack();
    const type = card.dataset.type;

    card.querySelector(".card-content").innerText =
      pick(pack[type]);
  });
}

function pinCard(btn) {

  const card = btn.closest(".table-card");

  const pinned = card.dataset.pinned === "true";

  card.dataset.pinned = !pinned;

  card.classList.toggle("pinned");
}

function clearTable() {
  document.getElementById("table").innerHTML = "";
}

// expose
window.drawElement = drawElement;
window.rerollCard = rerollCard;
window.rerollAll = rerollAll;
window.pinCard = pinCard;
window.clearTable = clearTable;
