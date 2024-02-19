import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { errors } from '@/constants/formErrors'
import { orderApi } from '@/hooks/api/orderApi'
import { statuses } from '@/hooks/lib/statuses'
import { useCategories } from '@/hooks/redux/useCategories'
import { useOrder } from '@/hooks/redux/useOrders'
import { useHandleError } from '@/hooks/useHandleError'

const schema = yup.object({
  store_id: yup.number().oneOf([1, 2, 3], errors.required).required(),
  category_label: yup.string().required(errors.required),
  job_order: yup.number().typeError(errors.required),
  part_model: yup.string(),
  model: yup.string(),
  downpayment: yup.number().default(0).typeError(errors.required),
  quantity: yup.number().required().typeError(errors.required),
  status: yup.string().oneOf(statuses, errors.required),
  link: yup.string(),
  notes: yup.string(),
  files: yup.mixed().nullable(),
})

export function useHooks() {
  const router = useRouter()
  const { orderId } = router.query
  const { order, isLoading } = useOrder(orderId)
  const { categories } = useCategories()
  const { handleError } = useHandleError()
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
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
      setValue('store_id', order.store_id)
      setValue('category_label', order.category.label)
      setValue('job_order', order.job_order)
      setValue('brand', order.brand)
      setValue('part_model', order.part_model)
      setValue('model', order.model)
      setValue('downpayment', order.downpayment)
      setValue('quantity', order.quantity)
      setValue('status', order.status)
      setValue('notes', order.notes)
    }
  }, [order, setValue])

  return {
    order,
    categories,
    handleSubmit: handleSubmit(onSubmit),
    formState: {
      errors,
      register,
      isLoading: isLoading || isUpdating,
      updateOrder,
    },
  }
}
