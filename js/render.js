"use strict";

{
  const imageUrls = Array.from(
    { length: 4 },
    (_, i) => `../assets/img/image${i + 1}.webp`
  );

  for (const url of imageUrls) {
    const img = new Image();
    img.src = url;
    img.onload;
  }
}
