(function () {
  const dialog = document.getElementById("lightbox");
  if (!dialog) return;
  const items = Array.from(document.querySelectorAll(".scenery-item"));
  if (items.length === 0) return;

  const imgEl = dialog.querySelector(".lightbox-img");
  const captionEl = dialog.querySelector(".lightbox-caption");
  let current = 0;

  function show(index) {
    current = (index + items.length) % items.length;
    const item = items[current];
    imgEl.src = item.dataset.full || item.dataset.fullJpeg;
    imgEl.alt = item.dataset.alt || "";
    captionEl.textContent = item.dataset.caption || "";
    if (!dialog.open) dialog.showModal();
    preload(current + 1);
    preload(current - 1);
  }

  function preload(index) {
    const i = (index + items.length) % items.length;
    const url = items[i].dataset.full || items[i].dataset.fullJpeg;
    if (!url) return;
    const img = new Image();
    img.src = url;
  }

  function close() {
    dialog.close();
    imgEl.removeAttribute("src");
  }

  items.forEach((item, i) => {
    item.addEventListener("click", () => show(i));
  });

  dialog.addEventListener("click", (e) => {
    const action = e.target.dataset && e.target.dataset.action;
    if (action === "close") close();
    else if (action === "prev") show(current - 1);
    else if (action === "next") show(current + 1);
    else if (e.target === dialog) close();
  });

  document.addEventListener("keydown", (e) => {
    if (!dialog.open) return;
    if (e.key === "ArrowRight") show(current + 1);
    else if (e.key === "ArrowLeft") show(current - 1);
  });
})();
