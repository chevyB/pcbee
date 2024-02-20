import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { errors } from '@/constants/formErrors'
import { orderApi } from '@/hooks/api/orderApi'
import { statuses } from '@/hooks/lib/statuses'
import { useOrder } from '@/hooks/redux/useOrders'
import { useHandleError } from '@/hooks/useHandleError'
import { useToast } from '@/hooks/useToast'

const schema = yup.object({
  store_id: yup.number().oneOf([1, 2, 3], errors.required).required(),
  category_label: yup.string().required(errors.required),
  job_order: yup.number().typeError(errors.required),
  part_model: yup.string().required(errors.required),
  model: yup.string(),
  downpayment: yup.number().default(0).typeError(errors.required),
  quantity: yup.number().required().typeError(errors.required),
  amount: yup.number().required(errors.required),
  status: yup.string().oneOf(statuses, errors.required),
  link: yup.string(),
  notes: yup.string(),
  files: yup.mixed().nullable(),
})

export function useHooks() {
  const router = useRouter()
  const { addToast } = useToast()
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
      const { id } = await updateOrder(updatedData).unwrap()
      addToast({
        message: 'Updated order successfully',
      })
      router.push(`/orders/${id}`)
    } catch (error) {
      handleError(error)
    }
  }
  useEffect(() => {
    if (order) {
      reset({ ...order, category_label: order.category.label })
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
      control,
    },
  }
}
