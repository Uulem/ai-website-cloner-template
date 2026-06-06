// Downloads the "One platform for warranties" mosaic product-gallery images
// from joinclyde.com (Contentful CDN) into public/images/mosaic/.
// 3 brand sets x 7 slots (a-g). Run: node scripts/download-mosaic.mjs
import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

const BASE = "https://images.ctfassets.net/08piu91gk050/";

// slot -> { id/hash } per set. Filenames: Clyde-Product-Gallery-{set}{slot}.png
const ASSETS = {
  // Set 1 — Alliance / headphones (light paper, green accent)
  "1a": "2poDqatQdqQjS8XUkS5H8N/867db41bf1e735c8a9ac8c8ebf4e7758",
  "1b": "3tYzFYfDJ7SaTu8MrbxyUe/428de0b722bd461217524ae10db260a3",
  "1c": "2q0AIufwT23fZ5ixOQKzia/6bf102d6dafe0d33cfcbbece45c0a84a",
  "1d": "1SakjW3lDxddOWFKMlZxRw/d61d5d5db8aef49e4ab15573df1ccecc",
  "1e": "6FZsPLjvcUik1CXR4ggCmA/082a71d8cbfddbb17f5897207ded3db7",
  "1f": "67GQHJEBOnlCmebmevTml1/4b82625481fd99554e73416384dc3f65",
  "1g": "1gimqAyc1AKMcbuMGbatCZ/7efba6f6e56b2bbe7f432646ab03208b",
  // Set 2 — TYME / watches (dark navy, blue/purple accent)
  "2a": "5IeY6ogR4r56q7zoxbMqcx/2966adf5993a08f5ca18b1e198ad992a",
  "2b": "2vJRbAHGTOSSmq0lQrHSwy/3c8bf16a4116dc70b2ba4d934af020fe",
  "2c": "6CWCYa5XukXbOU4uy1t0e/1b7f7bececa37e27dbefa28d46882ee8",
  "2d": "1V2RDDZp3TtVvmoQ3q0Jik/ab9c3a51a6b447e8598676249ef7abe8",
  "2e": "5VQ5Q6riEX9NWPRI0tLxXx/f04ad8c881af2ebc507f5b6bb3c847d4",
  "2f": "4shK1zV5eqD5DaupfeuapD/a48fbf32e139c28afa735c82c0c35f7f",
  "2g": "5Fleuo2ORG02HTltay2QI5/f8876c142a7ca5204071233570a1ffcb",
  // Set 3 — third brand
  "3a": "6QuZ9DXncwBJljhzNR3Tc0/3e481f12798ece2e936979affee99c01",
  "3b": "5ywpzpMg88OCCGT4CErmC7/20de60632fbd4e96c6eedbc1eccda446",
  "3c": "65v8EM7WorccxdNwG4QsZI/c28fe0c9193a2bbb55193197df748964",
  "3d": "3gGriSnXxHf1l2NtcnHCgM/a7d90704e8f6ff8f24e095e1cfe72ca9",
  "3e": "54MJwtkM6l80zVoFa5gEo3/cc8cc7ed5c97e8e22dd25d14b3eee4ea",
  "3f": "717b0aVj6KadsGgcVNs4Pi/0b738cf80ec93c1597cb8bd0e23de660",
  "3g": "65UemsvmewwM0DRKh6GcIU/ea9632ef72b061fb7ccc787e4872623b",
};

const OUT_DIR = new URL("../public/images/mosaic/", import.meta.url);

async function download(slot, path) {
  const url = `${BASE}${path}/Clyde-Product-Gallery-${slot}.png?fm=webp&w=900&q=80`;
  const dest = new URL(`mosaic-${slot}.webp`, OUT_DIR);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${slot}: HTTP ${res.status} (${url})`);
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(dirname(dest.pathname), { recursive: true });
  await writeFile(dest, buf);
  return `${slot} -> ${buf.length} bytes`;
}

const entries = Object.entries(ASSETS);
const results = [];
for (let i = 0; i < entries.length; i += 4) {
  const batch = entries.slice(i, i + 4);
  const out = await Promise.allSettled(batch.map(([s, p]) => download(s, p)));
  out.forEach((r, j) => {
    const slot = batch[j][0];
    if (r.status === "fulfilled") results.push(`OK  ${r.value}`);
    else results.push(`ERR ${slot}: ${r.reason.message}`);
  });
}
console.log(results.join("\n"));
