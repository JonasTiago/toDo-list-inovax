import { BiEdit } from 'react-icons/bi';
import { IoSaveOutline } from 'react-icons/io5';

export default function EditTask({
  setEdit,
  edit,
  editTask,
  checked,
}: {
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  edit: Boolean;
  editTask: Function;
  checked: boolean;
}) {
  return (
    <button
      className="bg-gray-500 w-full h-5/6 flex justify-center items-center rounded-br"
      onClick={() => setEdit(!edit)}
      disabled={checked}
    >
      {!edit ? (
        <BiEdit size={25} color={'#ffffff'} />
      ) : (
        <IoSaveOutline
          size={25}
          color={'#ffffff'}
          onClick={() => editTask("content")}
        />
      )}
    </button>
  );
}
