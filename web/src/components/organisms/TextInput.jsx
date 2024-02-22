import { TextInput as FlowbiteTextInput, Label } from 'flowbite-react'

const TextInput = (props) => {
  const { errors, name, register, label, containerClassName, ...rest } = props

  const formRegister = name && register && { ...register(name) }

  const error = errors?.[name]?.message || null

  return (
    <div className={`w-full ${containerClassName}`}>
      {label && (
        <div className='mb-2'>
          <Label value={label} />
        </div>
      )}
      <FlowbiteTextInput
        {...formRegister}
        {...rest}
        color={error ? 'error' : 'default'}
      />
      {error && <span className='text-xs text-red-700'>{error}</span>}
    </div>
  )
}

export default TextInput
