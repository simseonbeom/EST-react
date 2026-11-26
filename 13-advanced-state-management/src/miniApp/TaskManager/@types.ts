// ✅ 예열 완료 — 할 일 하나의 모양(Task)과 처음 목록. 리듀서(Part 3)와 스토어(Part 8)가 함께 씁니다.

export type Task = {
  id: string;
  content: string;
  isCompleted: boolean;
  isPin: boolean;
};

export const INITIAL_TASKS: Task[] = [
  {
    id: '374f637e-d27f-4aa3-acb4-a76b76a31d51',
    content: 'Context + Reducer',
    isCompleted: false,
    isPin: false,
  },
  {
    id: 'a1ddb5c6-f4aa-4c9c-968d-4c0750e5d705',
    content: 'Zustand',
    isCompleted: false,
    isPin: false,
  },
];
