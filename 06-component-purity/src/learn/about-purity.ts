
function truncateText(text:string,limit:number = 100):string{
  if(text.length > limit){
    return text.slice(0,limit) + '...'
  }
  return text
}

// 이 함수는 동일한 입력을 받았을 때,
// 동일한 결과를 반환한다? 반환하지 않는다?

// 순수 함수의 요건: 동일 입력 -> 동일 출력
// 순수함이란? 계산된 결과가 동일함을 말한다.


// 동일한 입력일 때, 출력 결과가 동일하다면?
// 이 함수는 순수하다.
const testText = 'a'.repeat(100);


console.log(1, truncateText(testText, 10)); // 'aaaaaaaaaa...'
console.log(2, truncateText(testText, 10)); // 'aaaaaaaaaa...'





function square(n: number): number {
  return n * n;
}

console.log(square(4)); // 16
console.log(square(4)); // 16


/* 
동일한 입력 4에 대해 항상 결과는 16

외부 상태를 참조하거나 변경하지 않음 → 순수 함수

*/


function sum(arr: number[]): number {
  return arr.reduce((acc, val) => acc + val, 0);
}

const nums = [1, 2, 3];
console.log(sum(nums)); // 6
console.log(sum(nums)); // 6

/* 
arr이 변경되지 않는 한 항상 동일한 결과를 반환

외부 변수 없음 → 순수 함수
*/








