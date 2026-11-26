import { PiPushPinFill, PiPushPinLight } from 'react-icons/pi';
import { RxCross1 } from 'react-icons/rx';
import tw from '@/utils/tw';
import type { Task } from './@types';
import { useTaskStore, useUnpinnedTasks } from './@store';
import { useShallow } from 'zustand/shallow';

function UnpinnedTaskList() {

  // TODO(Part 8-2) 스토어에서 고정 안 된 할 일 목록과 deleteTask · togglePin · setTask를 꺼내 오세요.
  // const tasks = useTaskStore((s) => s.tasks);
  // const unpinnedTaskList = useUnpinnedTasks();
  // const deleteTask = useTaskStore((s) => s.deleteTask);
  // const togglePin = useTaskStore((s) => s.togglePin);
  // const setTask = useTaskStore((s) => s.setTask);
  const unpinnedTaskList = useUnpinnedTasks();
  const { deleteTask, togglePin, setTask } = useTaskStore(useShallow((s) => ({
    deleteTask: s.deleteTask,
    togglePin: s.togglePin,
    setTask: s.setTask,
  })));
  console.log('zustand 언핀');
  

  const handleSetTask = (taskId:string, isCompleted:boolean) => {
    setTask(taskId, isCompleted);
  };

  const handleTogglePin = (taskId:string) => {
    togglePin(taskId);
  };

  const handleDeleteTask = (deleteId:string) => {
    deleteTask(deleteId);
  };


  return (
    <ul className='flex flex-col gap-6'>
      {unpinnedTaskList.map((task) => (
        <li key={task.id} className="flex justify-between gap-1.5">
          <label
            className={tw('flex gap-1', task.isCompleted && 'line-through')}
          >
            <input
              type="checkbox"
              className="accent-accent"
              defaultChecked={task.isCompleted}
              onChange={(e) => handleSetTask(task.id, e.target.checked)}
            />{' '}
            {task.content}
          </label>
          <div className="flex gap-2">
            <button type="button" onClick={() => handleTogglePin(task.id)}>
              {task.isPin ? <PiPushPinFill /> : <PiPushPinLight />}
            </button>
            <button type="button" onClick={() => handleDeleteTask(task.id)}>
              <RxCross1 />
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
export default UnpinnedTaskList
