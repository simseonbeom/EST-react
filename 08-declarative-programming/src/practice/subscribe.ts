// 서버 요청 흉내: 1초 뒤 '@'가 있으면 성공, 없으면 실패합니다. (수정하지 않아도 됩니다)
export const subscribe = (email: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email.includes('@')) {
        resolve();
      } else {
        reject(new Error('올바른 이메일이 아닙니다.'));
      }
    }, 1000);
  });
};
