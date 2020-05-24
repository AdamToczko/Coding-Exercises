const a = ["10", "20", "30"];

const x = a.map((value) => parseInt(value));

x;

// [10, 20, 30]

const imageWidth = 100;
const containerWidth = 200;

const y = imageWidth < containerWidth ? imageWidth : containerWidth;

y;

const z = Math.min(imageWidth, containerWidth);
z;
