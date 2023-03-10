export default function OpenTasks({openNumber}:{openNumber:number}) {
  return (
    <section className=" flex gap-2 text-blue-600 font-bold">
      <p className=" uppercase">Tarefas a fazer</p>
      <span className="bg-blue-400 text-black rounded px-1">{openNumber}</span>
    </section>
  );
}
