import { Textarea } from 'flowbite-react';

const TextAreaInput = ({ placeHolder }) => {
    return (
        <div className="col-start-1 col-end-auto">
            <Textarea placeholder={placeHolder} rows={4} />
        </div>
    )
}

export default TextAreaInput;