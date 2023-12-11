import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { errors } from '@/constants/formErrors'
import { authApi } from '@/hooks/api/authApi'
import { useHandleError } from '@/hooks/useHandleError'
import { useRouter } from 'next/router'
import { useUser } from '@/hooks/redux/auth'

const schema = yup
  .object({
    username: yup.string().required(errors.required),
    password: yup.string().required(errors.required),
  })
  .required()

export function useHooks() {
  const router = useRouter()
  const { login } = useUser()
  const [loginMutation] = authApi.useLoginMutation()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (data) => {
    try {
      const { token } = await loginMutation(data).unwrap()
      login(token)
      router.push('/dashboard')
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
