(function () {
  const photos = window.PHOTOS || [];
  const grid = document.getElementById("grid");
  const filters = document.getElementById("filters");
  const hero = document.getElementById("hero-media");
  document.getElementById("year").textContent = new Date().getFullYear();

  // Show a labeled placeholder tile if an image file is missing.
  function makeImg(photo, eager) {
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.title;
    if (!eager) img.loading = "lazy";
    img.onerror = () => {
      const ph = document.createElement("div");
      ph.className = "placeholder";
      ph.textContent = photo.title;
      img.replaceWith(ph);
    };
    return img;
  }

  if (photos[0]) hero.appendChild(makeImg(photos[0], true));

  // Filters
  const sports = ["All", ...new Set(photos.map((p) => p.sport))];
  let active = "All";
  if (sports.length > 2) {
    sports.forEach((s) => {
      const b = document.createElement("button");
      b.textContent = s;
      b.setAttribute("role", "tab");
      b.onclick = () => { active = s; render(); };
      filters.appendChild(b);
    });
  }

  let visible = [];
  function render() {
    visible = photos.filter((p) => active === "All" || p.sport === active);
    [...filters.children].forEach((b) =>
      b.setAttribute("aria-selected", b.textContent === active));
    grid.innerHTML = "";
    visible.forEach((p, i) => {
      const btn = document.createElement("button");
      btn.className = "tile";
      btn.setAttribute("aria-label", "Open " + p.title);
      btn.appendChild(makeImg(p));
      const cap = document.createElement("span");
      cap.className = "tile-cap";
      cap.textContent = p.title;
      btn.appendChild(cap);
      btn.onclick = () => open(i);
      grid.appendChild(btn);
    });
  }
  render();

  // Lightbox
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lb-img");
  const lbCap = document.getElementById("lb-cap");
  let idx = 0;
  function show(i) {
    idx = (i + visible.length) % visible.length;
    lbImg.src = visible[idx].src;
    lbImg.alt = visible[idx].title;
    lbCap.textContent = visible[idx].title;
  }
  function open(i) { show(i); lb.hidden = false; document.body.style.overflow = "hidden"; }
  function close() { lb.hidden = true; document.body.style.overflow = ""; }
  lb.querySelector(".lb-close").onclick = close;
  lb.querySelector(".lb-prev").onclick = () => show(idx - 1);
  lb.querySelector(".lb-next").onclick = () => show(idx + 1);
  lb.onclick = (e) => { if (e.target === lb) close(); };
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(idx - 1);
    if (e.key === "ArrowRight") show(idx + 1);
  });
})();
