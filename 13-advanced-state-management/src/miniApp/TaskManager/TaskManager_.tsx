import tw from "@/utils/tw"
import { INITIAL_TASKS } from "./@types"
import UnpinnedTaskList from "./UnpinnedTaskList_"
import PinnedTaskList from "./PinnedTaskList_"
import taskReducer, { addTask, deleteTask, setTask, togglePin } from "./@reducer"
import { useReducer } from "react";
import { TaskProvider } from "./@context"

function TaskManager() {
  // TODO(Part 4) 지금은 처음 목록을 그대로 나눠서 보여 주기만 합니다. 리듀서 상태로 바꾸세요.
  // const pinnedTaskList = INITIAL_TASKS.filter((task) => task.isPin);
  // const unpinnedTaskList = INITIAL_TASKS.filter((task) => !task.isPin);


  return (
    <TaskProvider>
      <div lang="en"
        className={tw(
          'w-72 flex flex-col gap-2 p-5 border border-solid border-accent rounded text-accent'
        )}
      >
        <PinnedTaskList />
        <UnpinnedTaskList />
      </div>
      </TaskProvider>
  )
}

export default TaskManager
