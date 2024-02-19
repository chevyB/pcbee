import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { orderApi } from '@/hooks/api/orderApi'
import { useOrder } from '@/hooks/redux/useOrders'
import { useHandleError } from '@/hooks/useHandleError'

const schema = yup.object({
  store_id: yup.number().oneOf([1, 2, 3]).required(),
  category_label: yup.string().required(),
  job_order: yup.number(),
  brand: yup.string().required(),
  part_model: yup.string(),
  model: yup.string(),
  downpayment: yup.number().default(0),
  amount: yup.number().required(),
  quantity: yup.number().required(),
  status: yup.string().oneOf(statuses),
  link: yup.string(),
  notes: yup.string(),
})

export function useHooks() {
  const router = useRouter()
  const { orderId } = router.query
  const { order, isLoading } = useOrder(orderId)
  const { handleError } = useHandleError()
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm({ resolver: yupResolver(schema) })

  const [updateOrder, { isLoading: isUpdating }] =
    orderApi.useUpdateOrderMutation()

  const onSubmit = async (formData) => {
    try {
      const updatedData = {
        ...formData,
        orderId,
      }
      const { order } = await updateOrder(updatedData).unwrap()
      router.push(`/orders`, order)
    } catch (error) {
      handleError(error)
    }
  }
  useEffect(() => {
    if (order) {
      reset(order)
    }
  }, [order, reset])

  return {
    order,
    handleSubmit: handleSubmit(onSubmit),
    formState: {
      errors,
      register,
      isLoading: isLoading || isUpdating,
      updateOrder,
      control
    },
  }
}
