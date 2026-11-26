import type { Task } from './@types';

export type State = Task[];

// ① 액션 이름
const ACTION_TYPES = {
  TOGGLE_PIN: '핀 토글',
  SET_TASK: '태스크 토글',
    DELETE_TASK: '태스크 삭제',
      ADD_TASK: '태스크 추가',
} as const;

// ② 액션 타입 + 액션 생성 함수
export type TogglePinAction = {
  type: typeof ACTION_TYPES.TOGGLE_PIN;
  payload: string; // taskId
};

export const togglePin = (taskId:string):TogglePinAction => ({
  type: ACTION_TYPES.TOGGLE_PIN,
  payload: taskId,
});

export type SetTaskAction = {
  type: typeof ACTION_TYPES.SET_TASK;
  payload: { taskId: string; isCompleted: boolean };
};
 
export const setTask = (taskId:string, isCompleted:boolean):SetTaskAction => ({
  type: ACTION_TYPES.SET_TASK,
  payload: { taskId, isCompleted },
});

 
export type DeleteTaskAction = {
  type: typeof ACTION_TYPES.DELETE_TASK;
  payload: string; // deleteId
};
 
export const deleteTask = (deleteId:string):DeleteTaskAction => ({
  type: ACTION_TYPES.DELETE_TASK,
  payload: deleteId,
});

export type AddTaskAction = {
  type: typeof ACTION_TYPES.ADD_TASK;
  payload: string; // nextStep
};
 
export const addTask = (nextStep:string) : AddTaskAction => ({
  type: ACTION_TYPES.ADD_TASK,
  payload: nextStep,
});

export type Action =

    | TogglePinAction
  | SetTaskAction
    | DeleteTaskAction
      | AddTaskAction;

// ③ 리듀서
export default function reducer(state:State, action:Action) : State {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_PIN: {
      const taskId = action.payload;

      const nextState = state.map((item) => {
        if (item.id === taskId) {
          const nextTask = { ...item, isPin: !item.isPin };
          return nextTask;
        } else {
          return item;
        }
      });
      return nextState;
    }

    case ACTION_TYPES.SET_TASK: {
      const { taskId, isCompleted } = action.payload;
 
      const nextState = state.map((item) => {
        if (item.id === taskId) {
          const nextTask = { ...item, isCompleted };
          return nextTask;
        } else {
          return item;
        }
      });
 
      return nextState;
    }
        case ACTION_TYPES.DELETE_TASK: {
      const deleteId = action.payload;
      const nextState = state.filter((item) => item.id !== deleteId);
      return nextState;
    }
        case ACTION_TYPES.ADD_TASK: {
      const newTask = {
        id: crypto.randomUUID(),
        content: action.payload,
        isCompleted: false,
        isPin: false,
      };
 
      const nextState = [newTask, ...state];
 
      return nextState;
    }

    default: {
      return state;
    }
  }
}