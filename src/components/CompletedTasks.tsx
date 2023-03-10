import { useEffect } from "react";

export default function CompletedTasks({
  taskNumber,
}: {
  taskNumber: boolean[];
}) {
  // useEffect(()=>{
  //   console.log(taskNumber)
  // },[taskNumber])
  // console.log(taskNumber)
  return (
    <section className=" flex gap-2 text-green-600 font-bold">
      <p className=" uppercase">Concluídas</p>
      <span className="bg-green-600 text-white rounded px-1">
        {taskNumber.filter((n) => n).length} de {taskNumber.map((n) => n).length}
      </span>
    </section>
  );
}
