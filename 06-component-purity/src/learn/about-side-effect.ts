let multiplier = 2;

function multiply(n: number): number {
  return n * multiplier;
}



console.log(multiply(3)); // 6

multiplier = 3;
console.log(multiply(3)); // 9 ❌ 결과가 달라짐
// 동일한 입력 3인데 출력이 달라짐 → 비순수 함수




function greet(name: string): string {
  console.log(`Hello, ${name}!`);
  return `Hello, ${name}!`;
}

greet('Alice'); // 콘솔에 출력이 발생 → 부작용 있음

// 출력 결과는 같지만, 콘솔 출력이라는 부작용이 있어서 순수 함수가 아님


/* 

| 입력 → 출력    | 결과는 오직 입력에만 따라야 함              |
| 외부 변수 사용 X | 외부 상태에 의존하면 순수하지 않음            |
| 부작용 없음     | 로그 출력, DOM 조작, 파일 쓰기 등은 모두 부작용 |
| 예측 가능성     | 같은 인자 → 항상 같은 결과               | 


*/

//   DOM 조작 (document.getElementById)

// 브라우저 API 호출 (setTimeout, setInterval)

// 로컬 스토리지 접근

// 서버 요청 (fetch, axios)

// 콘솔 출력 (console.log)

// 상태 저장소에 직접 쓰기 (Redux, zustand 외부 접근 등)


/* 
fetch(...)는 네트워크 요청으로 외부 API에 의존합니다.
동일한 userId로 호출해도 매번 네트워크 상황에 따라 결과가 달라질 수 있음
서버에 요청 로그가 남거나, API 호출 횟수 제한 등에 영향을 줄 수 있음
*/


export async function fetchUserInfo(userId:string) {

    try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    
    if (!response.ok) {
      throw new Error('유저 정보를 가져오지 못했습니다.');
    }

    const user = await response.json();

    // ✅ 사이드 이펙트: 콘솔 출력
    console.log('[유저 정보]', user);

    // ✅ 사이드 이펙트: DOM 조작
    const userEl = document.getElementById('user-info');
    if (userEl) {
      userEl.textContent = `이름: ${user.name}, 이메일: ${user.email}`;
    }

  } catch (err) {
    if(err instanceof Error){
      console.error('[에러]', err.message);
    }
  }
}














