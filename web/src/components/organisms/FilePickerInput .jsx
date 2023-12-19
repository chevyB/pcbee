import { FileInput, Label } from 'flowbite-react';
import React from 'react';


const FilePickerInput  = ({ multiple = false }) => {
    return (
        <div className="mb-2"> 
            <FileInput id="default-file-upload" multiple={multiple} />
        </div>
    )
}

export default FilePickerInput ;