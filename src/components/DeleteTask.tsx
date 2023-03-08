import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

export default function DeleteTask() {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className="bg-red-500 w-full h-5/6 flex justify-center items-center mb-1 rounded-tr">
          <FaRegTrashAlt size={25} color={'#ffffff'} />
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="w-5 h-2 bg-black overlayShow transition-all duration-150 ease-in-out fixed" />
        <AlertDialog.Content className="bg-white w-1/3 h-1/6 border-solid border fixed top-2/3 left-2/4 border-slate-500 flex flex-col justify-center items-center p-6 rounded-md shadow-slate-100 contentShow transition-all duration-150 ease-in-out translate-x-2/4 translate-y-2/4">
          <AlertDialog.Title className=" text-2xl m-3">
            Deseja deletar a task ?
          </AlertDialog.Title>
          <div>
            <AlertDialog.Cancel className=" bg-red-500 border w-32 h-9 mr-2">
              Cancelar
            </AlertDialog.Cancel>
            <AlertDialog.Action className="bg-blue-500 border w-32 h-9">
              OK
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
