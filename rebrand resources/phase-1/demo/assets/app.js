// Shared by every page. Each block only runs on the page that has its elements.
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

// The logo's halftone "bloom": dot radius shrinks linearly with distance from the center.
function halftone(target, { size, gap, reach, rMax, fall = reach, fade = false, stagger = 0 }) {
  const [w, h] = size, cx = w / 2, cy = h / 2;
  let out = "";
  for (let y = cy % gap; y <= h; y += gap) {
    for (let x = cx % gap; x <= w; x += gap) {
      const d = Math.hypot(x - cx, y - cy);
      if (d > reach) continue;
      const r = Math.max(1.6, rMax * (1 - d / fall));
      const o = fade ? ` fill-opacity="${(0.12 + 0.88 * (1 - d / reach) ** 2).toFixed(2)}"` : "";
      const s = stagger ? ` style="animation-delay:${Math.round(d * stagger)}ms"` : "";
      out += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(2)}"${o}${s}/>`;
    }
  }
  target.innerHTML = out;
}

const CATS = {
  counter: ["Point of sale", "Selling, orders, customers and cash at the counter."],
  office: ["Back office", "Catalog, stock, team access and store settings."],
  online: ["Online & delivery", "Web orders, drivers and moving stock between stores."],
  payments: ["Payments", "Taking payments with Bleaum Pay."],
  hardware: ["Hardware & apps", "Installing the POS app and connecting printers."],
};
// [category, title, description, where it lives in the app, extra search words, current route]
const GUIDES = [
  ["counter", "Dashboard overview", "A snapshot of sales, tasks and recent activity for your store.", "", "home graphs shortcuts", "dashboard-overview"],
  ["counter", "Side settings panel", "Queue, activity and personalize tabs, plus your default POS screen.", "", "queue customer appearance print", "side-settings-panel"],
  ["counter", "User menu", "Clock in and out, update your PIN and profile, or turn on share mode.", "", "clock shift pin profile logout qr", "user-dropdown-menu"],
  ["counter", "Action icons", "What the activity, notification and chat icons in the top bar do.", "", "bolt bell chat messages", "action-icons"],
  ["counter", "Fulfillment", "Handle in-store, pickup and delivery orders, including Order Ahead.", "Fulfillment", "order ahead pickup in-store", "fulfillment-section"],
  ["counter", "Orders and returns", "Find any order, reprint a receipt or process a return.", "", "refund receipt history", "orders-management-section"],
  ["counter", "Customers", "Customer profiles, sign-ups and purchase history.", "", "loyalty profile signup", "customer-management-section"],
  ["counter", "Promotions", "Coupons, deals and loyalty reward settings.", "", "discount coupon deal loyalty rewards", "promotions-section"],
  ["counter", "Cash management", "Registers, drawers and the vault, from opening float to close.", "Settings › Cash Management", "register drawer vault float close", "cash-management-section"],
  ["office", "Catalog", "Products, classifications, brands and the product matrix.", "Catalog › Products", "csv import variants tax", "catalog-section"],
  ["office", "Inventory", "Stock levels, low-stock thresholds and pricing tiers.", "", "stock count reconcile pricing", "inventory-management-section"],
  ["office", "State reporting", "Connect your state tracking system and reconcile records.", "", "compliance sync reconcile", "metrc-section"],
  ["office", "Audit logs", "See who changed what, and when.", "", "history activity security", "audit-logs-section"],
  ["office", "Team and access", "Employees, groups, permissions and shifts.", "Settings › Access Management", "employee role permission group shift", "access-management-section"],
  ["office", "Shop settings", "Store information, receipts and checkout preferences.", "Settings › Store Information", "address email receipt preferences shop", "shop-settings-section"],
  ["online", "Online ordering", "Publish your online menu and take orders from the web.", "", "ecommerce web menu store", "online-ordering-help-guide"],
  ["online", "Delivery management", "Drivers, vehicles and live GPS tracking.", "", "driver vehicle route gps", "delivery-management-section"],
  ["online", "Transfers", "Move stock between your locations and track it on the way.", "", "transfer location stock move", "/docs/transfers"],
  ["payments", "Bleaum Pay", "Set up Bleaum Pay and see how payments and payouts work.", "", "card payment payout terminal", "/docs/pay"],
  ["hardware", "Download the POS app", "Desktop installers and system requirements for the POS app.", "", "install desktop windows mac linux", "/docs/download-pos-app"],
  ["hardware", "Printer setup", "Install the Printer Client and route receipts and labels to the right printer.", "", "printer label receipt client host", "/printersetup"],
];
const STEPS = [
  ["Account", "Account and shop details"],
  ["Team", "Employees and access"],
  ["Registers", "Registers, drawers and vault"],
  ["Catalog", "Catalog and inventory"],
  ["Selling", "Selling and the POS workflow"],
  ["Online", "Delivery and online ordering"],
  ["Loyalty", "Loyalty, notifications and marketing"],
  ["Hardware", "Hardware and printing"],
  ["Go live", "Go-live checklist"],
];

const plural = n => `${n} guide${n === 1 ? "" : "s"}`;
const href = slug => slug.startsWith("/") ? slug : `/docs/pos-help-guide/${slug}`;
// Only Cash management and Printer setup have sample pages; other guides show a note.
const gLink = g => g[5] === "cash-management-section" ? 'href="article.html"' : g[5] === "/printersetup" ? 'href="downloads.html#downloads-printer"' : `href="${href(g[5])}" data-soon`;
const areaOf = g => CATS[g[0]][0];
const words = v => v.trim().toLowerCase().split(/\s+/).filter(Boolean);
const matches = (g, cat, t) => (cat === "all" || g[0] === cat) && t.every(w => g.join(" ").toLowerCase().includes(w));
const query = new URLSearchParams(location.search).get("q") || "";
const toast = text => {
  const n = $("#note");
  n.textContent = text;
  clearTimeout(toast.t);
  toast.t = setTimeout(() => n.textContent = "", 2800);
};

// ---- Every page
$$("[data-rail]").forEach(el => el.innerHTML = STEPS.map(([short], i) => `<li><b>${i + 1}</b>${short}</li>`).join(""));
if ($("#year")) $("#year").textContent = new Date().getFullYear();
addEventListener("keydown", e => {
  const f = $("input[type=search]");
  if (e.key === "/" && f && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) {
    e.preventDefault();
    f.focus();
  }
});

// ---- Home A, B, C, D
if ($(".bloom")) halftone($(".bloom"), { size: [760, 760], gap: 34, reach: 370, rMax: 21, fall: 400, fade: true, stagger: 2.2 });
if ($(".hb-bloom")) halftone($(".hb-bloom"), { size: [760, 760], gap: 34, reach: 370, rMax: 21, fall: 400, fade: true });
if ($(".hd-orb")) halftone($(".hd-orb"), { size: [760, 760], gap: 34, reach: 370, rMax: 21, fall: 400, fade: true });
if ($("#index")) $("#index").innerHTML = Object.entries(CATS).map(([key, [name, blurb]]) => `
  <li><a href="guides.html#${key}"><span class="row"><span class="t">${name}</span><span class="lead" aria-hidden="true"></span>
  <span class="c">${plural(GUIDES.filter(g => g[0] === key).length)}</span></span><span class="b">${blurb}</span></a></li>`).join("");
const popular = ["Cash management", "Dashboard overview", "User menu", "Fulfillment", "Promotions", "Printer setup"].map(n => GUIDES.find(g => g[1] === n));
if ($("#pop")) $("#pop").innerHTML = popular.map(g => `<li><a ${gLink(g)}><span class="row"><span class="t">${g[1]}</span><span class="lead" aria-hidden="true"></span><span class="c">${areaOf(g)}</span></span><span class="b">${g[2]}</span></a></li>`).join("");
if ($("#rank")) $("#rank").innerHTML = popular.map(g => `<li><a ${gLink(g)}><span><b>${g[1]}</b><span class="d">${g[2]}</span></span></a></li>`).join("");
if ($("#hc-cards")) $("#hc-cards").innerHTML = Object.entries(CATS).map(([key, [name, blurb]]) =>
  `<li><a href="guides.html#${key}"><span class="t">${name}</span><span class="b">${blurb}</span><span class="c">${plural(GUIDES.filter(g => g[0] === key).length)}</span></a></li>`).join("");

// ---- Guides A: grouped lists. The category comes from the URL hash, the search from ?q=
if ($("#gq")) {
  const gq = $("#gq"), empty = $("#empty");
  let cat = "all";
  const render = () => {
    const t = words(gq.value);
    const hits = GUIDES.filter(g => matches(g, cat, t));
    $("#results").innerHTML = Object.entries(CATS).map(([key, [name, blurb]]) => {
      const rows = hits.filter(g => g[0] === key);
      if (!rows.length) return "";
      return `<section class="group"><h2>${name} <span>${plural(rows.length)}</span></h2><p>${blurb}</p><ul class="rows">${rows.map(g =>
        `<li><a ${gLink(g)}><span class="t">${g[1]}</span><span class="d">${g[2]}</span>${g[3] ? `<span class="path">${g[3]}</span>` : ""}</a></li>`).join("")}</ul></section>`;
    }).join("");
    empty.hidden = hits.length > 0;
    $("span", empty).textContent = gq.value.trim();
  };
  const setCat = c => {
    cat = CATS[c] ? c : "all";
    $$(".filters button").forEach(b => b.setAttribute("aria-pressed", b.dataset.cat === cat));
    render();
  };
  gq.value = query;
  gq.addEventListener("input", render);
  $$(".filters button").forEach(b => b.addEventListener("click", () => { location.hash = b.dataset.cat; }));
  addEventListener("hashchange", () => setCat(location.hash.slice(1)));
  setCat(location.hash.slice(1));
}

// ---- Guides B: cards and checkbox filters (several areas at once)
if ($("#hb-grid")) {
  $("#hb-filters").innerHTML = Object.entries(CATS).map(([k, [n]]) =>
    `<label><input type="checkbox" value="${k}"><span>${n}</span><span class="n">${GUIDES.filter(g => g[0] === k).length}</span></label>`).join("");
  const renderB = () => {
    const on = $$("#hb-filters input:checked").map(i => i.value), t = words($("#gqb").value);
    const hits = GUIDES.filter(g => (!on.length || on.includes(g[0])) && matches(g, "all", t));
    $("#hb-grid").innerHTML = hits.map(g => `<a class="gcard" ${gLink(g)}><span class="gc-area">${areaOf(g)}</span><span class="t">${g[1]}</span><span class="d">${g[2]}</span>${g[3] ? `<span class="path">${g[3]}</span>` : ""}</a>`).join("");
    $("#hb-count").textContent = `${hits.length} of ${GUIDES.length} guides`;
    $("#hb-empty").hidden = hits.length > 0;
    $("#hb-empty span").textContent = $("#gqb").value.trim();
  };
  $("#gqb").value = query;
  $("#gqb").addEventListener("input", renderB);
  $("#hb-filters").addEventListener("change", renderB);
  $("#hb-clear").addEventListener("click", () => { $$("#hb-filters input").forEach(i => i.checked = false); $("#gqb").value = ""; renderB(); });
  renderB();
}

// ---- Guides C: dense table, one area at a time, two sort orders
let hcCat = "all", hcSort = "area";
function renderC() {
  const t = words($("#gqc").value);
  let hits = GUIDES.filter(g => matches(g, hcCat, t));
  if (hcSort === "az") hits = [...hits].sort((a, b) => a[1].localeCompare(b[1]));
  $("#hc-body").innerHTML = hits.map(g => `<tr><td><a ${gLink(g)}>${g[1]}</a><small>${g[2]}</small></td><td class="area">${areaOf(g)}</td><td class="where">${g[3] || "–"}</td></tr>`).join("");
  $("#hc-count").textContent = plural(hits.length);
  $("#hc-empty").hidden = hits.length > 0;
  $("#hc-empty span").textContent = $("#gqc").value.trim();
  $$("[data-hcat]").forEach(b => b.setAttribute("aria-pressed", b.dataset.hcat === hcCat));
  $$("[data-hsort]").forEach(b => b.setAttribute("aria-pressed", b.dataset.hsort === hcSort));
}
if ($("#hc-body")) {
  $("#hc-pills").innerHTML = [["all", "All"], ...Object.entries(CATS).map(([k, [n]]) => [k, n])].map(([k, n]) => `<button type="button" data-hcat="${k}">${n}</button>`).join("");
  $("#gqc").value = query;
  $("#gqc").addEventListener("input", renderC);
  renderC();
}

// ---- Guide article: side list of guides
if ($("#doc-nav")) $("#doc-nav").innerHTML = GUIDES.filter(g => g[0] === "counter").map(g =>
  g[1] === "Cash management" ? `<li><a href="article.html" aria-current="page">${g[1]}</a></li>` : `<li><a href="#" data-soon>${g[1]}</a></li>`).join("");

// ---- Getting started: step cards + side list
const DETAILS = [
  ["shop-settings-section", "Shop settings", ["Sign in at ops.pos.bleaum.io and reset your password.", "Add your store name, address, email and phone under Settings › Store Information.", "Turn on the essentials, such as email receipts and out-of-stock sales."]],
  ["access-management-section", "Team and access", ["Add your team under Settings › Access Management › Employees and give each person a role.", "Create groups like Cashiers and Managers and set what each group can do.", "Turn on PIN clock-in and clock-out so shifts are easy to audit."]],
  ["article.html", "Cash management", ["Add each POS station under Settings › Cash Management › Registers.", "Add a drawer to each register, enter the opening balance, then test open and close.", "Set the Main Vault starting balance and log the first deposit."]],
  ["catalog-section", "Catalog", ["Import products from a CSV file, or add them by hand under Catalog › Products.", "Create categories and give each the right tax profile.", "Set stock levels, low-stock thresholds and tiered pricing.", "Run an initial sync and reconcile with your state reporting integration, if you have one."]],
  ["fulfillment-section", "Fulfillment", ["Run a test sale for in-store, pickup and delivery orders.", "Test customer sign-up and anonymous checkout.", "Check that web orders from Order Ahead arrive in the POS.", "Practice a return from the Orders and Returns tabs."]],
  ["delivery-management-section", "Delivery management", ["Add drivers and vehicles and assign them to deliveries.", "Send a test notification, then set up scheduled alerts."]],
  ["promotions-section", "Promotions", ["Set up loyalty rewards so points update at every touchpoint.", "Create your first coupon or deal.", "Choose which customer notifications to send."]],
  ["downloads.html#downloads-printer", "Printer setup", ["Install the Printer Client on one computer in the store.", "Choose output types for receipts and labels, then run a test print."]],
  ["support.html", "Contact support", ["Ring up a test sale and refund it.", "Count each drawer and compare it to the system.", "Check that every employee can sign in with their PIN.", "Check printers, scanners and card readers at every register."]],
];
if ($("#cards")) {
  $("#cards").innerHTML = STEPS.map(([, full], i) => {
    const [slug, name, bullets] = DETAILS[i];
    const link = slug.includes(".html") ? `href="${slug}"` : `href="${href(slug)}" data-soon`;
    return `<section class="step-card" id="start-${i + 1}" aria-labelledby="sc-${i}">
  <div class="sc-head"><span class="num">${i + 1}</span><h2 id="sc-${i}">${full}</h2></div>
  <ul>${bullets.map(b => `<li>${b}</li>`).join("")}</ul>
  <div class="sc-foot"><a ${link}>Read the guide: ${name}</a><button class="btn btn-quiet" type="button" data-step="${i}" aria-pressed="false">Mark done</button></div></section>`;
  }).join("");
  $("#vsteps").innerHTML = STEPS.map(([, full], i) => `<li><a href="#start-${i + 1}"><b>${i + 1}</b>${full}</a></li>`).join("");
}

// ---- Setup progress, remembered per browser. The Guides A checklist and Getting started share it.
let done = [];
try { done = JSON.parse(localStorage.getItem("bleaum-setup")) || []; } catch { }
if ($("#check")) {
  $("#check").innerHTML = STEPS.map(([, full], i) => `<li><label><input type="checkbox" value="${i}"><span>${full}</span></label></li>`).join("");
  $("#check").addEventListener("change", () => setDone($$("#check input:checked").map(el => +el.value)));
}
$$("#meter, #start-meter").forEach(m => m.innerHTML = "<i></i>".repeat(STEPS.length));
function drawProgress() {
  $$("#meter i, #start-meter i").forEach((dot, i) => dot.classList.toggle("on", i % STEPS.length < done.length));
  $$("#count, #start-count").forEach(el => el.textContent = `${done.length} of ${STEPS.length} steps done`);
  $$("#check input").forEach(el => el.checked = done.includes(+el.value));
  $$("[data-step]").forEach(b => {
    const on = done.includes(+b.dataset.step);
    b.setAttribute("aria-pressed", on);
    b.textContent = on ? "Done" : "Mark done";
    b.closest(".step-card").dataset.done = on;
  });
  $$("#vsteps li").forEach((li, i) => li.dataset.done = done.includes(i));
}
function setDone(next) {
  done = next;
  try { localStorage.setItem("bleaum-setup", JSON.stringify(done)); } catch { }
  drawProgress();
}
drawProgress();

// ---- Downloads: platform switch (requirements match the live download page)
const BASE = "https://bleaum-development-artifacts.s3.us-east-2.amazonaws.com/latest";
const OS = {
  win: ["Windows", ["Windows 10 (1803+) or 11, 64-bit", "WebView2 runtime (installs automatically)", "4 GB RAM minimum", "500 MB free disk space"], [["Download .msi", `${BASE}/x86_64-pc-windows-msvc/BleaumPOS.msi`]]],
  mac: ["macOS", ["macOS 10.15 (Catalina) or newer, Apple silicon or Intel", "4 GB RAM minimum", "500 MB free disk space"], [["Apple silicon (.dmg)", `${BASE}/aarch64-apple-darwin/BleaumPOS.dmg`], ["Intel (.dmg)", `${BASE}/x86_64-apple-darwin/BleaumPOS.dmg`]]],
};
function drawOS(k) {
  const [name, reqs, files] = OS[k];
  $$(".seg button").forEach(b => b.setAttribute("aria-pressed", b.dataset.os === k));
  $("#dl-card").innerHTML = `<div><h3>Bleaum POS for ${name}</h3><p class="muted">Install it on every register computer.</p>
  <div class="actions">${files.map(([l, u], i) => `<a class="btn${i ? " btn-quiet" : ""}" href="${u}">${l}</a>`).join("")}</div></div>
  <ul class="reqs">${reqs.map(r => `<li>${r}</li>`).join("")}</ul>`;
}
if ($("#dl-card")) drawOS("win");

// ---- Support ticket (sample: nothing is sent)
if ($("#ticket")) $("#ticket").addEventListener("submit", e => {
  e.preventDefault();
  $("#done-email").textContent = $("#t-email").value;
  $("#ticket").hidden = true;
  $("#ticket-done").hidden = false;
});

// ---- Clicks that work on any page
document.addEventListener("click", e => {
  const soon = e.target.closest("[data-soon],[data-note]");
  if (soon) {
    e.preventDefault();
    toast(soon.dataset.note || "Demo only: Cash management is the one sample guide.");
  }
  const vote = e.target.closest("[data-vote]");
  if (vote) $("#vote").innerHTML = `<p role="status">Thanks. ${vote.dataset.vote === "yes" ? "Glad it helped." : "We will take another look at this guide."}</p>`;
  const step = e.target.closest("[data-step]");
  if (step) {
    const i = +step.dataset.step;
    setDone(done.includes(i) ? done.filter(n => n !== i) : [...done, i]);
  }
  const os = e.target.closest("[data-os]");
  if (os) drawOS(os.dataset.os);
  const hc = e.target.closest("[data-hcat],[data-hsort]");
  if (hc) {
    if (hc.dataset.hcat) hcCat = hc.dataset.hcat; else hcSort = hc.dataset.hsort;
    renderC();
  }
});
