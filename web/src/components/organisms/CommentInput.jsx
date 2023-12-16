import { Label, Textarea } from 'flowbite-react';
import React from 'react';

const CommentInput = () => {
    return (
        <div className="col-start-1 col-end-auto">
            <div className="mb-2 block">
                <Label htmlFor="comment" value="" />
            </div>
            <Textarea id="comment" placeholder="Comment" required rows={4} />
        </div>
    )
}

export default CommentInput;