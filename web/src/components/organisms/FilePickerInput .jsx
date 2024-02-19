import { FileInput } from 'flowbite-react'

const ImageFilePickerInput = (props) => {
  const { multiple, errors, name, register, ...rest } = props

  const formRegister = name && register && { ...register(name) }

  const error = errors?.[name]?.message || null

  return (
    <>
      <FileInput
        multiple={multiple}
        accept='image/jpeg, image/png, image/jpg'
        {...formRegister}
        {...rest}
        color={error ? 'error' : 'default'}
      />
      {error && <span className='text-xs text-red-700'>{error}</span>}
    </>
  )
}

export default ImageFilePickerInput
