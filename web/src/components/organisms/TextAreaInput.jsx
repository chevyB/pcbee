import { Textarea } from 'flowbite-react';

const TextAreaInput = ({ placeHolder }) => {
    return (
        <Textarea placeholder={placeHolder} rows={4} />
    )
}

export default TextAreaInput;