import { DividerHorizontalIcon, CheckIcon } from '@radix-ui/react-icons';
import * as Checkbox from '@radix-ui/react-checkbox';
export default function CheckBox({
  checked,
  checkTask,
  editTask,
}: {
  checked: boolean;
  checkTask: Function;
  editTask: Function;
}): JSX.Element {
  return (
    <Checkbox.Root className="peer/done  flex justify-center items-center">
      <Checkbox.Indicator />
      {checked === false && (
        
        <DividerHorizontalIcon
          className="bg-gray-400 w-7 h-7 text-xl text-gray-400 rounded "
          fontSize={'80px'}
          onClick={() => {
            checkTask();
            editTask("chekbox");
          }}
        />
      
    )}
    {checked === true && (
      <CheckIcon
        className="text-white text-xl w-7 h-7  bg-blue-500 rounded"
        fontSize={'80px'}
        onClick={() => {
          checkTask();
          editTask("chekbox");
        }}
      />
    )}
      
    </Checkbox.Root>
  );
}
