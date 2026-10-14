// Dummy behaviour only: nothing is sent anywhere.
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

// The logo's halftone "bloom": dot radius shrinks with distance from the center.
function halftone(svg, { size = 760, gap = 34, reach = 370, rMax = 21, fall = 400, stagger = 0 } = {}) {
  const c = size / 2;
  let out = "";
  for (let y = c % gap; y <= size; y += gap) {
    for (let x = c % gap; x <= size; x += gap) {
      const d = Math.hypot(x - c, y - c);
      if (d > reach) continue;
      const o = (0.12 + 0.88 * (1 - d / reach) ** 2).toFixed(2);
      const delay = stagger ? ` style="animation-delay:${Math.round(d * stagger)}ms"` : "";
      out += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${Math.max(1.6, rMax * (1 - d / fall)).toFixed(2)}" fill-opacity="${o}"${delay}/>`;
    }
  }
  svg.innerHTML = out;
}
$$(".bloom").forEach(s => halftone(s, { stagger: 2.2 }));
$$(".hb-bloom").forEach(s => halftone(s));

const year = $("#year");
if (year) year.textContent = new Date().getFullYear();

// Links to pages that are not in the demo show a note instead.
const note = $("#note");
document.addEventListener("click", e => {
  const a = e.target.closest("[data-note]");
  if (!a) return;
  e.preventDefault();
  note.textContent = a.dataset.note;
  clearTimeout(note.t);
  note.t = setTimeout(() => (note.textContent = ""), 2800);
});

// Header menus: one open at a time, close on outside click or Escape.
const menus = $$("details.menu");
document.addEventListener("click", e => menus.forEach(m => { if (!m.contains(e.target)) m.open = false; }));
addEventListener("keydown", e => { if (e.key === "Escape") menus.forEach(m => (m.open = false)); });
menus.forEach(m => m.addEventListener("toggle", () => { if (m.open) menus.forEach(o => { if (o !== m) o.open = false; }); }));

// Integrations filter. The URL hash is the state, so tabs can be linked.
if ($("#int-grid")) {
  const show = c => {
    const k = ["general", "regulated"].includes(c) ? c : "all";
    $$(".filters button").forEach(b => b.setAttribute("aria-pressed", b.dataset.int === k));
    $$("#int-grid [data-group]").forEach(s => (s.hidden = k !== "all" && s.dataset.group !== k));
  };
  $$(".filters button").forEach(b => b.addEventListener("click", () => { location.hash = b.dataset.int; }));
  addEventListener("hashchange", () => show(location.hash.slice(1)));
  show(location.hash.slice(1));
}

// Forms: swap the form for a thank-you message.
[["#demo-form", "#demo-done", "#d-email", "#demo-email"], ["#support-form", "#support-done", "#s-email", "#support-email"]].forEach(([f, done, inp, out]) => {
  if (!$(f)) return;
  $(f).addEventListener("submit", e => {
    e.preventDefault();
    $(out).textContent = $(inp).value;
    $(f).hidden = true;
    $(done).hidden = false;
  });
});

// Region list for the demo form: US states, DC, Canadian provinces, Other.
if ($("#d-region")) {
  const US = "Alabama,Alaska,Arizona,Arkansas,California,Colorado,Connecticut,Delaware,Florida,Georgia,Hawaii,Idaho,Illinois,Indiana,Iowa,Kansas,Kentucky,Louisiana,Maine,Maryland,Massachusetts,Michigan,Minnesota,Mississippi,Missouri,Montana,Nebraska,Nevada,New Hampshire,New Jersey,New Mexico,New York,North Carolina,North Dakota,Ohio,Oklahoma,Oregon,Pennsylvania,Rhode Island,South Carolina,South Dakota,Tennessee,Texas,Utah,Vermont,Virginia,Washington,West Virginia,Wisconsin,Wyoming,District of Columbia".split(",");
  const CA = "Alberta,British Columbia,Manitoba,New Brunswick,Newfoundland and Labrador,Nova Scotia,Ontario,Prince Edward Island,Quebec,Saskatchewan".split(",");
  const opts = l => l.map(n => `<option>${n}</option>`).join("");
  $("#d-region").innerHTML = `<option value="">Choose one</option><optgroup label="United States">${opts(US)}</optgroup><optgroup label="Canada">${opts(CA)}</optgroup><option>Other</option>`;
}
