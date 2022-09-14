export default function bubble_sort(arr: number[]): void {
  for (let i = 0; i < arr.length; ++i) {
    for( let j = 0; j < arr.length - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j);
      } 
    }
  }
}

/**
 * swap(arr: number[], pos: number): void
 * @description swaps position in an element with the next 
 * @param number[] arr - input array
 * @param number pos - position to swap
 * @returns void
 *
 * @example 
 * const secretCode = [6, 8, 7,5 ,3 , 0, 9]
 * swap(secretCode, 2)
 * // outputs secretCode = [8, 6, 7 , 5, 3, 0, 9]
 */
function swap(arr: number[], pos: number): void {
  const tmp = arr[pos];
  arr[pos] = arr[pos + 1];
  arr[pos + 1] = tmp;
}
