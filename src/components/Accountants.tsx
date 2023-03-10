import CompletedTasks from './CompletedTasks';
import OpenTasks from './OpenTasks';
import { TaskProps } from './TasksArea';

export default function Accountants({ children }: { children: TaskProps[] }) {
  return (
    <section className=" flex justify-end gap-3 text-xs my-5">
      <OpenTasks openNumber={children.filter(s=> s.done === false).length}/>
      <CompletedTasks taskNumber={children.map(s=> s.done)}/>
    </section>
  );
}
