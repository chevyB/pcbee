import { FileInput, Label } from 'flowbite-react';
import React from 'react';


const ImgUpload = (props) => {
    return (
        <div>

            <div>
                <Label htmlFor="large-file-upload" value="Upload File" />
            </div>
            <FileInput id="large-file-upload" sizing="lg" />

        </div>
    )
}

export default ImgUpload;