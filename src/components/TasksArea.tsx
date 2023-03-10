import { useEffect, useState } from 'react';
import BG from '../assets/bg.png';
import Task from './Task';
import Form from './Form';
import Accountants from './Accountants';
import axios from 'axios';
import { BASE_URL } from '../service/urlsBase';

export type TaskProps = {
  done: boolean;
  text: string;
  id: number;
};

export default function TasksArea() {
  const [tasksList, setTasksList] = useState<TaskProps[]>([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/task`)
      .then((res) => {
        setTasksList(res.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, [tasksList]);

  return (
    <section className="max-w-4xl mx-auto px-10 h-2/3 mt-16 flex flex-col ">
      <Form />
      <Accountants>{tasksList}</Accountants>
      <div className=" opacity-90 w-full h-screen flex flex-col">
        {tasksList.length ? (
          tasksList.map((task: TaskProps) => <Task key={task.id}>{task}</Task>)
        ) : (
          <img src={BG} alt="xx" />
        )}
      </div>
    </section>
  );
}
