export const reorder = (input: unknown[], from: number, to: number) => {
  "worklet";
  const offsets = [...input];
  while (from < 0) {
    from += offsets.length;
  }
  while (to < 0) {
    to += offsets.length;
  }
  if (to >= offsets.length) {
    let k = to - offsets.length;
    while (k-- + 1) {
      offsets.push();
    }
  }
  offsets.splice(to, 0, offsets.splice(from, 1)[0]);
  return offsets;
};
