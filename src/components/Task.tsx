import axios from 'axios';
import { useState } from 'react';
import { BASE_URL } from '../service/urlsBase';
import CheckBox from './Checkbox';
import DeleteTask from './DeleteTask';
import EditTask from './EditTask';
import { TaskProps } from './TasksArea';
import ToastTask from './Toast';

export default function Task({ children }: { children: TaskProps }) {
  const [edit, setEdit] = useState<boolean>(false);
  const [content, setContent] = useState<{ text: string; done: boolean }>({
    text: children.text,
    done: children.done,
  });
  const [action, setAction] = useState(false);

  function fillTask(text: string) {
    setContent({
      ...content,
      text: text,
    });
  }

  function checkTask() {
    setContent({
      ...content,
      done: !content.done,
    });
  }

  function editTask(origin: string) {
    const body = {
      text: content.text,
      done: origin === 'content' ? content.done : !content.done,
    };

    axios
      .put(`${BASE_URL}/task/${children.id}`, body)
      .then((res) => {
        setAction(true);
      })
      .catch((res) => {
        console.log(res);
      });
    setAction(false);
  }

  return (
    <div className=" grup w-full flex sm:flex-row flex-col justify-between my-2">
      {action && <ToastTask />}
      <div className="flex w-full">
        <div className="bg-bgTask w-2/12 sm:w-1/12 flex justify-center items-center sm:rounded-bl sm:rounded-tl ">
          <CheckBox
            checked={content.done}
            checkTask={checkTask}
            editTask={editTask}
          />
        </div>
        {!content.done ? (
          <input
            type="text"
            className=" enabled:text-black enabled:border-2 enabled:bg-white text-white text-base w-full h-20 sm:mx-1 mx-0 bottom-1  bg-bgTask sm:px-5 px-3 py-2.5 border-l truncate"
            disabled={!edit ? true : false}
            value={content.text}
            onChange={(e) => fillTask(e.target.value)}
          />
        ) : (
          <input
            type="text"
            className="   text-blue-500 text-base w-full h-20 sm:mx-1  border-l  bg-bgTask sm:px-5 px-3 py-2.5 line-through truncate"
            disabled={true}
            value={content.text}
            onChange={(e) => fillTask(e.target.value)}
          />
        )}
      </div>

      <div className="sm:w-1/12 flex justify-between sm:flex-col items-baseline">
        <DeleteTask taskId={children.id} />
        <EditTask
          setEdit={setEdit}
          edit={edit}
          editTask={editTask}
          checked={content.done}
        />
      </div>
    </div>
  );
}
