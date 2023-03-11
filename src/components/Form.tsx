import * as Label from '@radix-ui/react-label';
import axios from 'axios';
import { useState } from 'react';
import { BASE_URL } from '../service/urlsBase';

export default function Form() {
  const [task, setTask] = useState<{ text: string }>({
    text: '',
  });

  function fillInForm(e: string) {
    setTask({
      ...task,
      text: e,
    });
  }

  function submitTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = {
      text: task.text,
    };
    axios
      .post(`${BASE_URL}/task`, body)
      .then((res) => {
        // setUptade(!update);
        setTask({
          ...task,
          text: '',
        });
      })
      .catch((res) => {
        if (res.response.status === 409) {
          alert('A tarefe ja exite e não foi concluida!');
        }
        if (res.response.status === 422) {
          alert('A tarefa deve ter no minimo de 5 caracteres!');
        }
      });
  }
  return (
    <form
      className="flex items-center h-10 justify-center "
      onSubmit={(e) => submitTask(e)}
    >
      <Label.Root
        htmlFor=""
        className="w-full m-auto flex justify-between relative"
      >
        <input
          type="text"
          value={task.text}
          name="text"
          onChange={(e) => fillInForm(e.target.value)}
          className=" bg-gray-300 border-solid border-grayBorder border-2 w-10/12 sm:h-10 h-12 p-3 rounded"
          placeholder="Descreva a tarefa aqui"
          required
          autoComplete="off"
        />
        <input
          type="submit"
          value="Criar tarefa"
          className=" bg-black sm:hover:opacity-80 text-white w-24 sm:w-32 sm:font-bold h-12 sm:h-10 text-sm sm:text-base rounded cursor-pointer"
        />
      </Label.Root>
    </form>
  );
}
