function areOrdered(array) {
  if (array.length == 0) return false;
  if (array.length == 1) return true;
  const sortedArray = array.toSorted((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== sortedArray[i]) return false;
  }
  return true;
}

module.exports = areOrdered;
