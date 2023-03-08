import * as Label from '@radix-ui/react-label';
export default function Form() {
  return (
    <form action="" className="flex items-center h-10 justify-center">
      <Label.Root htmlFor="" className="w-full m-auto flex justify-between relative">
        <input
          type="text"
          className=" bg-gray-300 border-solid border-grayBorder border-2 w-10/12 h-10 p-3 rounded"
          placeholder="Descreva a tarefa aqui"
        />
        <input
          type="button"
          value="Criar tarefa"
          className=" bg-black text-white w-32 h-10 text-base rounded"
        />
      </Label.Root>
    </form>
  );
}
