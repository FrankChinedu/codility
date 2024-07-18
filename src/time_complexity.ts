export const solution = (arr: number[]): number => {
  const sum = arr.reduce((a, b)=> a+b, 0);
  const length = arr.length;
  const obj: {
    [key: string]: [number, number]
  } = {};

  for (let i = 0; i < length - 1; i++) {
    if (i === 0) {
      const val = arr[i];
      obj[i] = [val, sum - val];
    } else {
      const oldMap = obj[i - 1];
      const oldVal = oldMap[0];
      const currentVal = oldVal + arr[i];
      obj[i] = [currentVal, (sum - currentVal)]
    }
  }
  const diff = [];
  for (let key in obj) {
   const tuple = obj[key];
   const ans = tuple[0] - (tuple[1]);
   diff.push(Math.abs(ans))
  }
  return  Math.min(...diff)
}