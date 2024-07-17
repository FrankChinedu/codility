export const solution = (arr: number[]): number => {
  const sum = arr.reduce((a, b)=> a+b, 0);
  return sum
}