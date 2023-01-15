function smartGarbage(trash, bins) {
  if (bins[trash]) {
    bins[trash]++;
  }
  return bins;
}