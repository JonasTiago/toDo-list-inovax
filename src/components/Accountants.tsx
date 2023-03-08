import CompletedTasks from './CompletedTasks';
import OpenTasks from './OpenTasks';

export default function Accountants() {
  return (
    <section className=' flex justify-end  gap-3 text-xs my-5'>
      <OpenTasks />
      <CompletedTasks />
    </section>
  );
}
