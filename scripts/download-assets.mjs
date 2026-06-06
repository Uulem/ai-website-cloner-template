// Downloads all assets from joinclyde.com/extended-warranty to public/
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const ROOT = process.cwd();
const C = "https://images.ctfassets.net/08piu91gk050/";
const C2 = "https://images.ctfassets.net/5vqn43ej3ghk/";
const SITE = "https://joinclyde.com";

// [remoteUrl, localPath]
const assets = [
  // Hero
  [C + "2dMHsdHVLQaS6z5e87z6tB/061fd494fb814fb43f73f2ad2a356416/Clyde-Extended-Hero2.jpg", "images/hero.jpg"],
  [C + "5F8OHmZbUWG47gMCnPAnW4/d1dfb044ff6041ac17a30e9759854e46/Artboard_1_copy_5_3.png", "images/discover-icon.png"],
  // Purchase experience cards (01)
  [C + "2aKyP3gwhv5HhtMuzucSh8/1a2e0e3e3c8c5f4e817aa776569884d4/01a3.jpg", "images/purchase-01a.jpg"],
  [C + "7aIDmDnkdHRbs18yNVrliC/47b5b11eb508fd1695d9deb9596e5687/01b3.jpg", "images/purchase-01b.jpg"],
  [C + "1BsD6Zow73UVNTz64K2ILp/2f18288fef9e58c8be3368241252e94f/01c3.jpg", "images/purchase-01c.jpg"],
  // Claims experience cards (02)
  [C + "3JsMa6RZbKFWfbYAbZMVZd/d5d5300131f84028642aaf5c100ab400/02a.jpg", "images/claims-02a.jpg"],
  [C + "16EoQpG3x6Uyj7xdcrtRgi/1fdfd89315e3e1cbdb541e73951da9cc/02b.jpg", "images/claims-02b.jpg"],
  [C + "15PQXcY5Sp8zmdaXB8fU15/ba7b05d930bd557dcd4fdb1ed63d45fe/02c.jpg", "images/claims-02c.jpg"],
  // Merchant experience cards (03)
  [C + "7e5V8UKrhT47Jk5APQEIGI/0f30e4c096dd6c7b5862dcd138341e2b/03a.jpg", "images/merchant-03a.jpg"],
  [C + "5yLU5b7V6DURE3STMN41EH/1d5c866763464d7b583668a29a7a61ab/03b.jpg", "images/merchant-03b.jpg"],
  [C + "7fodgT5RAVFhi1zfga5Lje/9cffe11298f7d6e28d7f1ea215a7c1d2/03c.jpg", "images/merchant-03c.jpg"],
  // Registria partnership
  [C + "6oJQtuMkDShRS8taS8u7VG/b2912d0e0c40a76b26aa53e1a3d7439c/Clyde-Registria-partnership.png", "images/registria.png"],
  // Umbrella icon
  [C + "2aZF470EOw202FRRsXLEaa/02179203559bfe02c3f780c78fde9b99/umbrella.png", "images/umbrella.png"],
  // Why love Clyde
  [C + "YYOryo4AtDweJn152tk5f/f05aefa2c59d5726e659da11e95ed711/Clyde-Love___01.png", "images/love-01.png"],
  [C + "2AB1H9zH48lKWfSHDBOXDQ/1fa37daa2f62da7edda249b607bb31b6/Clyde-Love___02.png", "images/love-02.png"],
  [C + "2lNG9FaW0xzCzm61zGm5ZT/0fb320a3e5d31f96759003b8b898d8b0/Clyde-Love___03.png", "images/love-03.png"],
  [C + "6REvYJP7KtXcIFL3guOWza/611171e1d4455f62c645cce17f0c1239/Clyde-Love___04.png", "images/love-04.png"],
  // Use cases
  [C + "6aS6zmn9Jse2CAV16dbJJ3/5d5ccbae8532f0d30751b0bdb41005a1/Clyde-UseCases___01.png", "images/usecase-01.png"],
  [C + "OIcxWxtwZHQz3e4WZbwuh/baaddbf1e0c848e1fd6e46b342dc3f70/Use-Case-Logo-Vaio.svg", "images/logo-vaio.svg"],
  [C + "3R4T71uksVo0WmA1LG4bFO/d2f01bf8d9b5f05ba548704230620e75/Clyde-UseCases___Senville.png", "images/usecase-senville.png"],
  [C + "561QvYOvRpRaqUThmGrDWM/ec3006a01c6d0464dc8c34c81878340d/Use-Case-Logo-Senville.svg", "images/logo-senville.svg"],
  [C + "65JlXo6VsRCbBhbsUHwDEb/6d68611873a44e3c48e9c6c70aa32736/Clyde-UseCases___Lull.png", "images/usecase-lull.png"],
  [C + "3eT132KVY4pOzoblZQCjBm/ee5b89b5cd80431a0227d34100d00a92/Use-Case-Logo-Lull.svg", "images/logo-lull.svg"],
  [C + "NqPx732hJwFKShULVDMUO/d76bba31a8070658cd6f59d1718badb4/Clyde-UseCases___07.png", "images/usecase-07.png"],
  [C + "7H7pLVgJN5EXTcejGWl9Qm/445913f70232ccbdf0e300792be16a3b/Use-Case-Logo-Blix.svg", "images/logo-blix.svg"],
  [C + "6ZU6wi7cMZHiuos9oCTEzK/c5dbcfa15a03b76ee9e94700d99e21d3/Clyde-UseCases___06.png", "images/usecase-06.png"],
  [C + "3SaHdesq7OcoUBGTQpMKbC/d3727cc8a76bdafe328e7a7b2f249323/Use-Case-Logo-Tempo.svg", "images/logo-tempo.svg"],
  [C + "16DsHY3dOUeTB2LRGR38Wl/ab2b1399a9902f9f8d7570c6213cedcc/Clyde-UseCases___04.png", "images/usecase-04.png"],
  [C + "36l2efEvOSWE4r3ZiayZqy/7c9471418b3aa4d96244fc2b91aea7aa/movado.svg", "images/logo-movado.svg"],
  [C + "1uktcd4dmFjgC2goTDJHUG/b26fb57166059b883b26fe225f220e46/Logo-Movado-Black.svg", "images/logo-movado-black.svg"],
  // Resources / blog
  [C2 + "sWjYaeZihuYHQNWvIUxHM/58c9e88a21bdb25692b43c37c751f1d4/Clyde-app-Banner-2.png", "images/blog-commitment.png"],
  [C2 + "29g2B1y4nQq5QIRqViKJ0i/c00597c42b21e7f961831836b3879d8a/Clyde-Blog-Claims-Experience.png", "images/blog-claims.png"],
  [C2 + "6Tn12oeekr9vj1fKlu5DYV/f47f8123019cce9f96d2b53b24bdced1/Clyde-Blog-Measure-Customer-Value.png", "images/blog-value.png"],
  // FAQ
  [C + "1A6vplQCBix9hYYxmcdoEA/c13801a2e31f41a98afaaf8c132bd9e3/Clyde-FAQ-Image.jpg", "images/faq.jpg"],
  // Fonts
  [SITE + "/fonts/oldschool-grotesk/OldschoolGrotesk_W-Medium.woff2", "fonts/OldschoolGrotesk-Medium.woff2"],
  [SITE + "/fonts/oldschool-grotesk/OldschoolGrotesk_W-Book.woff2", "fonts/OldschoolGrotesk-Book.woff2"],
  [SITE + "/fonts/oldschool-grotesk/OldschoolGroteskCompact_W-Book.woff2", "fonts/OldschoolGroteskCompact-Book.woff2"],
  [SITE + "/fonts/recoleta/Recoleta-Regular.woff2", "fonts/Recoleta-Regular.woff2"],
  // Favicons / SEO
  [SITE + "/favicon-32x32.png", "seo/favicon-32x32.png"],
  [SITE + "/favicon-16x16.png", "seo/favicon-16x16.png"],
  [SITE + "/apple-touch-icon.png", "seo/apple-touch-icon.png"],
  [SITE + "/favicon.ico", "seo/favicon.ico"],
  [SITE + "/safari-pinned-tab.svg", "seo/safari-pinned-tab.svg"],
];

async function download([url, rel]) {
  const dest = join(ROOT, "public", rel);
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    return `✓ ${rel} (${(buf.length / 1024).toFixed(1)}kb)`;
  } catch (e) {
    return `✗ ${rel} — ${e.message} [${url}]`;
  }
}

async function run() {
  const batchSize = 4;
  const results = [];
  for (let i = 0; i < assets.length; i += batchSize) {
    const batch = assets.slice(i, i + batchSize);
    results.push(...(await Promise.all(batch.map(download))));
  }
  console.log(results.join("\n"));
  const failed = results.filter((r) => r.startsWith("✗"));
  console.log(`\n${results.length - failed.length}/${results.length} downloaded.`);
  if (failed.length) process.exitCode = 1;
}

run();
