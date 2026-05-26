// Auto-discovers photos in src/scenery/ and combines them with caption/alt
// overrides + custom ordering from src/_data/scenery-overrides.json.
//
// To add a new photo: drop it into src/scenery/. It appears in the gallery
// automatically, sorted at the end with a generic caption. To customise the
// caption/alt or change the order, edit Scenery → Photo captions & order in
// the admin (or edit src/_data/scenery-overrides.json directly).

const fs = require("fs");
const path = require("path");

const SCENERY_DIR = path.join(__dirname, "..", "scenery");
const OVERRIDES_PATH = path.join(__dirname, "scenery-overrides.json");
const IMG_EXT = /\.(jpe?g|png|webp)$/i;

const DEFAULT_CAPTION = "Around Brae Lochaber";
const DEFAULT_ALT = "Scenery from around Glen Roy Cafe, Roy Bridge";

function basename(p) {
  return String(p || "").split(/[\\/]/).pop();
}

module.exports = function () {
  if (!fs.existsSync(SCENERY_DIR)) return [];

  const filesOnDisk = new Set(
    fs.readdirSync(SCENERY_DIR)
      .filter((name) => IMG_EXT.test(name) && !name.startsWith("."))
  );

  const ordered = [];

  if (fs.existsSync(OVERRIDES_PATH)) {
    const data = JSON.parse(fs.readFileSync(OVERRIDES_PATH, "utf8"));
    const list = Array.isArray(data.photos) ? data.photos : [];
    for (const p of list) {
      const file = basename(p && p.file);
      if (!file || !filesOnDisk.has(file)) continue;
      ordered.push({
        file,
        caption: p.caption || DEFAULT_CAPTION,
        alt: p.alt || p.caption || DEFAULT_ALT,
      });
      filesOnDisk.delete(file);
    }
  }

  for (const file of Array.from(filesOnDisk).sort()) {
    ordered.push({ file, caption: DEFAULT_CAPTION, alt: DEFAULT_ALT });
  }

  return ordered;
};
