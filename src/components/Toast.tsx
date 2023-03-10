import { useState } from 'react';

export default function ToastTask() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(true);
  }

  setTimeout(closeModal, 1500)

  return (
    <div
      className=" right-0 p-2 flex flex-col justify-center items-center fixed bg-blue-400 w-1/5 gap-2 rounded mr-2 aria-checked:hidden"
      aria-checked={modalIsOpen}
    >
      <h4 className="text-2xl ">Ação finalizada!</h4>
      <button
        className="w-1/3 h-6 bg-red-500 motion-reduce"
        onClick={() => closeModal()}
      >
        close
      </button>
    </div>
  );
}
