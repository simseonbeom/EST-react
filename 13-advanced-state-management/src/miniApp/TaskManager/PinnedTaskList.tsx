import { PiPushPinFill, PiPushPinLight } from 'react-icons/pi';
import tw from '@/utils/tw';
import type { Task } from './@types';
import { usePinnedTasks, useTaskStore } from './@store';
import { useShallow } from 'zustand/shallow';

function PinnedTaskList() {

  // TODO(Part 8-2) 스토어에서 고정된 할 일 목록과 togglePin · setTask를 꺼내 오세요.
  // const tasks = useTaskStore((s) => s.tasks);
  // const pinnedTaskList = useTaskStore((s) => s.tasks.filter((t) => t.isPin));
  // const togglePin = useTaskStore((s) => s.togglePin);
  // const setTask = useTaskStore((s) => s.setTask);
  
  const pinnedTaskList = usePinnedTasks();
  const { togglePin, setTask } = useTaskStore(useShallow((s) => ({
    togglePin: s.togglePin,
    setTask: s.setTask,
  })));
  console.log('zustand 핀');

  const handleSetTask = (taskId:string, isCompleted:boolean) => {
    setTask(taskId, isCompleted);
  };

  const handleTogglePin = (taskId:string) => {
    togglePin(taskId);
  };

  return (
    <ul className='flex flex-col gap-2' >
      {pinnedTaskList.map((task) => {
        return (
          <li key={task.id} className="flex justify-between gap-1.5">
            <label
              className={tw('text-2xl',task.isCompleted ? 'line-through' : '')}
            >
              <input
                type="checkbox"
                defaultChecked={task.isCompleted}
                onChange={(e) => handleSetTask(task.id, e.target.checked)}
              />{' '}
              {task.content}
            </label>
            <div className="flex gap-2">
              <button type="button" onClick={() => handleTogglePin(task.id)}>
                {task.isPin ? <PiPushPinFill /> : <PiPushPinLight />}
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}


export default PinnedTaskList;
