import * as Label from '@radix-ui/react-label';
export default function Form() {
  return (
    <form action="" className="flex items-center justify-center">
      <Label.Root htmlFor="" className="w-full ">
        <input
          type="text"
          className=" bg-gray-300 border-solid border-grayBorder border-2 w-9/12 h-9 mx-1 p-3 rounded"
          placeholder="Descreva a tarefa aqui"
        />
        <input
          type="button"
          value="Criar tarefa"
          className=" bg-black text-white h-9 w-28 text-base rounded"
        />
      </Label.Root>
    </form>
  );
}
