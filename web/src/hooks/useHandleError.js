import { useToast } from './useToast'

export const useHandleError = () => {
  const { addToast } = useToast()

  const handleError = (error) => {
    const errorMessage = errors?.[name]?.message || null

    if (!!errorMessage) {
      addToast({
        type: 'error',
        message: errorMessage,
      })
    }
  }

  return {
    handleError,
  }
}
