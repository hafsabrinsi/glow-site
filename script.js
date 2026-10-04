// ===== 1. DATA =====
const products = [
  { name: "Rose Runtime", cat: "perfume", price: 420, notes: ["rose", "musk", "vanilla"], color: "#f7c6d0" },
  { name: "Midnight Bug", cat: "perfume", price: 380, notes: ["oud", "amber"], color: "#c9b6e4" },
  { name: "Hydrate()", cat: "skincare", price: 190, notes: ["hyaluronic acid"], color: "#bfe3e0" },
  { name: "Glow Serum v2.0", cat: "skincare", price: 260, notes: ["vitamin C"], color: "#fde2b8" },
  { name: "Lip.gloss", cat: "makeup", price: 120, notes: ["rosy nude"], color: "#f4a7b9" },
  { name: "Blush --soft", cat: "makeup", price: 150, notes: ["peach"], color: "#ffd1c1" },
];

// ===== 2. RENDER PRODUCTS =====
const grid = document.getElementById("grid");

function render(category) {
  const list = category === "all" ? products : products.filter((p) => p.cat === category);

  grid.innerHTML = list
    .map(
      (p) => `
    <article class="card">
      <div class="card-img" style="background: linear-gradient(135deg, ${p.color}, #fff)"></div>
      <p class="card-cat">#${p.cat}</p>
      <h3>${p.name}</h3>
      <code>notes: [${p.notes.map((n) => `"${n}"`).join(", ")}]</code>
      <div class="card-footer">
        <span>${p.price} MAD</span>
        <button class="add">+ add</button>
      </div>
    </article>`
    )
    .join("");
}

// ===== 3. FILTERS =====
document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    btn.classList.add("active");
    render(btn.dataset.cat);
  });
});

// ===== 4. CART =====
const cartCount = document.getElementById("cart-count");
let cart = 0;

grid.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    cart++;
    cartCount.textContent = cart;
  }
});

// ===== 5. TYPING EFFECT =====
const text = `$ npm install glow
> skincare.js ....... ok
> perfume.js ........ ok
> confidence.js ..... ok
✓ build successful — you're ready.`;

let i = 0;
function type() {
  if (i < text.length) {
    document.getElementById("typing").textContent += text[i];
    i++;
    setTimeout(type, 45);
  }
}

// ===== 6. START =====
render("all");
type();