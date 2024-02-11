import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { orderApi } from '@/hooks/api/orderApi'
import { statuses } from '@/hooks/lib/statuses'
import { useCategories } from '@/hooks/redux/useCategories'
import { useOrder } from '@/hooks/redux/useOrders'

const schema = yup.object({
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
})

export function useHooks(orderId) {
  const router = useRouter()
  const { order, isLoading } = useOrder(orderId)
  const [updateOrderMutation] = orderApi.useUpdateOrderMutation()
  const { categories } = useCategories()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: order,
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    try {
      const { order } = await updateOrderMutation(data).unwrap()
      router.push(`/orders`, order)
    } catch (error) {
      handleError(error)
    }
  }

  return {
    order,
    categories,
    handleSubmit: handleSubmit(onSubmit),
    isLoading,
    formState: {
      errors,
      register,
    },
  }
}

export default useHooks
