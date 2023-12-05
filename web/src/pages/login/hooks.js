import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { errors } from '@/constant/formErrors'
import { useAuthLogin } from '@/hooks/redux/auth'
import { authApi } from '@/hooks/api/authApi'
import { useHandleError } from '@/hooks/useHandleError'

const schema = yup
  .object({
    username: yup.string().required(errors.required),
    password: yup.string().required(errors.required),
  })
  .required()

export function useHooks() {
  const [loginMutation] = authApi.useLoginMutation()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (data) => {
    try {
      const result = await loginMutation(data).unwrap()
      // TODO:Toast Add success toast here 
    } catch (error) {
      useHandleError(error)
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
