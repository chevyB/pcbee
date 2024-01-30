import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { useChangePasswordMutation } from '@/hooks/api/authApi'
import { useHandleError } from '@/hooks/useHandleError'

const schema = yup.object({
  old_password: yup.string().min(6).required(),
  password: yup.string().min(6).required(),
  confirmed_password: yup.string().min(6).required(),
})

export const useHooks = () => {
  const router = useRouter()
  const { handleError } = useHandleError()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) })

  const [changePassword] = useChangePasswordMutation()

  const onSubmit = async (data) => {
    console.log('Text')
    try {
      await changePassword(data).unwrap()
      router.push(`/profile`)
    } catch (error) {
      handleError(error)
    }
  }
  
  return {
    handleSubmit: handleSubmit(onSubmit),
    formState: {
      errors,
      register,
    },
  }
}
