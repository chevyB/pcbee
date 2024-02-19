import { yupResolver } from '@hookform/resolvers/yup'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { orderApi } from '@/hooks/api/orderApi'
import { statuses } from '@/hooks/lib/statuses'
import { useCategories } from '@/hooks/redux/useCategories'
import { useHandleError } from '@/hooks/useHandleError'

const schema = yup.object({
  order_at: yup.date().required(),
  store_id: yup.number().oneOf([1, 2, 3]).required(),
  category_label: yup.string().required(),
  job_order: yup.number(),
  brand: yup.string().required(),
  part_model: yup.string(),
  model: yup.string(),
  downpayment: yup.number().default(0),
  quantity: yup.number().required(),
  status: yup.string().oneOf(statuses),
  link: yup.string(),
  notes: yup.string(),
  files: yup.mixed().nullable(),
})

export function useHooks() {
  const router = useRouter()
  const { handleError } = useHandleError()
  const [createOrderMutation] = orderApi.useCreateOrderMutation()
  const { categories } = useCategories()
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      order_at: dayjs(new Date()).format('YYYY-MM-DD'),
    },
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    const payload = new FormData()

    Object.keys(data).forEach((key) => {
      const value = data[key]
      if (key === 'files') {
        Array.from(value).forEach((file, index) => {
          payload.append(`files[${index}]`, file)
        })
      } else if (key === 'order_at') {
        payload.append(key, dayjs(value).format('YYYY-MM-DD'))
      } else {
        payload.append(key, value)
      }
    })

    try {
      const order = await createOrderMutation(payload).unwrap()
      router.push(`/orders/${order.id}`)
    } catch (error) {
      handleError(error)
    }
  }
  return {
    categories,
    handleSubmit: handleSubmit(onSubmit),
    formState: {
      errors,
      register,
      control,
    },
  }
}
