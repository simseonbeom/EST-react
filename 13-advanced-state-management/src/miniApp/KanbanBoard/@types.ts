// ✅ 예열 완료 — 칸반 카드의 상태 이름과 카드 모양. 스토어(Part 9)와 컴포넌트가 함께 씁니다.

export const TASKS = {
  planned: 'PLANNED',
  ongoing: 'ONGOING',
  done: 'DONE',
} as const


export type TaskType = typeof TASKS[keyof typeof TASKS];

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskType;
}
