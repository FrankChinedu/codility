export const solution = (arr: number[]): number => {
  const obj = {} as any;
  for (let num of arr) {
    if (obj[num]) {
      obj[num] += 1; 
    } else {
      obj[num] = 1;
    }
  }
  let result: number = 0;

  for (let key in obj) {
    let val = obj[key];
    if (val % 2 === 1) {
      result = +key;
      break;
    }
  }
  return result;
}
let array = [9, 3, 9, 3, 9, 7, 9];

solution(array);
/**
 *  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
 * 
 */