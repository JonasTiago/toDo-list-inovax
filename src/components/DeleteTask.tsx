import axios from 'axios';
import { FaRegTrashAlt } from 'react-icons/fa';
import { BASE_URL } from '../service/urlsBase';

export default function DeleteTask({
  taskId,
}: {
  taskId: Number;
}) {
  function delTask(id: Number) {
    axios
      .delete(`${BASE_URL}/task/${id}`)
      .then((res) => {
        console.log('ok')
      })
      .catch((res) => {
        alert('Erro inesperado');
      });
  }
  return (
    <button
      className="bg-red-500 w-full h-5/6 flex justify-center items-center mb-1 rounded-tr"
      onClick={() => delTask(taskId)}
    >
      <FaRegTrashAlt size={25} color={'#ffffff'} />
    </button>
  );
}
