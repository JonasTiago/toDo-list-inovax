import CompletedTasks from './CompletedTasks';
import OpenTasks from './OpenTasks';
import { TaskProps } from './TasksArea';

export default function Accountants({ children }: { children: TaskProps[] }) {
  return (
    <section className=" flex sm:justify-end justify-between sm:gap-3 text-base sm:text-xs my-4 sm:my-5 ">
      <OpenTasks openNumber={children.filter(s=> s.done === false).length}/>
      <CompletedTasks taskNumber={children.map(s=> s.done)}/>
    </section>
  );
}
