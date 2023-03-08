export default function CompletedTasks() {
  return (
    <section className=" flex gap-2 text-green-600 font-bold">
      <p className=" uppercase">Concluídas</p>
      <span className="bg-green-600 text-white rounded px-1">{0} de {0}</span>
    </section>
  );
}
