import { FileInput } from 'flowbite-react'

const ImageFilePickerInput = ({ multiple = false }) => {
  return (
    <>
      <FileInput
        multiple={multiple}
        accept='image/jpeg, image/png, image/jpg'
      />
    </>
  )
}

export default ImageFilePickerInput
