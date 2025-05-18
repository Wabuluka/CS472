function personInfo(person: { name: string; age: number; isStudent: boolean }) {
  console.log(
    `Name: ${person.name}, Age: ${person.age}, Student: ${person.isStudent}`
  );
}

function max(a: Array<number>) {
  let maxNum = a[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i] > maxNum) {
      maxNum = a[i];
    }
  }
  return maxNum;
}
console.log(max([1, 2, 3, 4, 5])); // Output: 5

function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

function concatMe<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = concatMe(array1, array2);
