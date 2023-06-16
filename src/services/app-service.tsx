export const appService = {
  getSections,
  getNewArrivals,
}

function getSections() {
  return [
    'new arrivals',
    'brands',
    'nobiety',
    'clothing',
    'footwear',
    'accessories',
    'objcets',
    'sale',
  ]
}

function getNewArrivals() {
  return [
    {
      name: 'Winnie New York – Triangle Bomber Light Blue',
      price: 1260,
      img: 'https://ik.imagekit.io/tfcgjzp4c/NOBIETY/Hero-section/new-arrival1.webp?updatedAt=1686942207471',
    },
    {
      name: 'Highsnobiety – Cotton Mesh Knit Tank Top Blue',
      price: 75,
      img: 'https://ik.imagekit.io/tfcgjzp4c/NOBIETY/Hero-section/new-arrival2.webp?updatedAt=1686942208098',
    },
    {
      name: 'GmbH – Rim Denim Shorts Light Indigo Blue',
      price: 485,
      img: 'https://ik.imagekit.io/tfcgjzp4c/NOBIETY/Hero-section/new-arrival3.webp?updatedAt=1686942207511',
    },
    {
      name: 'Y/Project – Paris’ Best Boots Vintage Ice Blue',
      price: 855,
      img: 'https://ik.imagekit.io/tfcgjzp4c/NOBIETY/Hero-section/new-arrival4.webp?updatedAt=1686942207614',
    },
  ]
}
