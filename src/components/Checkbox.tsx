import { DividerHorizontalIcon, CheckIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';

export default function CheckBox() {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox.Root
      onCheckedChange={() => setChecked(!checked)}
      className="  flex justify-center items-center "
    >
      <Checkbox.Indicator />
      {checked === false && (
        <DividerHorizontalIcon
          className="bg-gray-400 w-7 h-7 text-xl text-gray-400 rounded"
          fontSize={'80px'}
        />
      )}
      {checked === true && (
        <CheckIcon
          className="text-white text-xl w-7 h-7  bg-blue-500 rounded"
          fontSize={'80px'}
        />
      )}
    </Checkbox.Root>
  );
}
