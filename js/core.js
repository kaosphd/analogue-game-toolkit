// =========================
// CORE ENGINE (V2)
// =========================

window.APP = {
  activePack: "entrepreneurship",
  packs: {}
};

// -------------------------
// PACK REGISTRY
// -------------------------

function registerPack(name, data) {
  window.APP.packs[name] = data;
}

function getPack() {
  return window.APP.packs[window.APP.activePack];
}

// -------------------------
// UTILITIES
// -------------------------

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function setPack(name) {
  window.APP.activePack = name;
}

// -------------------------
// GLOBAL EXPORT
// -------------------------

window.registerPack = registerPack;
window.getPack = getPack;
window.pick = pick;
window.setPack = setPack;
