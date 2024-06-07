"use strict";

{
  const imageUrls = Array.from(
    { length: 4 },
    (_, i) => `../assets/img/image${i + 1}.webp`
  );

  const loadImage = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = resolve();
    });
  };

  (async () => {
    for (const url of imageUrls) {
      await loadImage(url);
    }
  })();
}
