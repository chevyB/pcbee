import { Textarea } from 'flowbite-react';

const TextAreaInput = ({ placeHolder, name, register }) => {
  return <Textarea placeholder={placeHolder} rows={4} {...register(name)} />;
};

export default TextAreaInput;
