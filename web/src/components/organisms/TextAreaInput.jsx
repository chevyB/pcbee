import { Label, Textarea } from 'flowbite-react';
import React from 'react';

const TextAreaInput = () => {
    return (
        <div className="col-start-1 col-end-auto">
            <Textarea placeholder="Comment" rows={4} />
        </div>
    )
}

export default TextAreaInput;