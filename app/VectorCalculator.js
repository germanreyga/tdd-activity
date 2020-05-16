exports.sum = (v1, v2) => {
  return { x: v1.x + v2.x, y: v1.y + v2.y };
};

exports.sub = (v1, v2) => {
  return { x: v1.x - v2.x, y: v1.y - v2.y };
};

exports.scalar = (v1, scalar) => {
  return { x: v1.x * scalar, y: v1.y * scalar };
};

exports.dot = (v1, v2) => {
  return v1.x * v2.x + v1.y * v2.y;
};
