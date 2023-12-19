import { FileInput } from 'flowbite-react';
import React from 'react';


const FilePickerInput  = ({ multiple = false }) => {
    return (
        <>
            <FileInput multiple={multiple} />
        </>
    )
}

export default FilePickerInput ;