import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { orderApi } from '@/hooks/api/orderApi'
import { statuses } from '@/hooks/lib/statuses'
import { useCategories } from '@/hooks/redux/useCategories'
import { useOrder } from '@/hooks/redux/useOrders'
import { useHandleError } from '@/hooks/useHandleError'

const schema = yup.object({
  status: yup.string().oneOf(statuses),
  notes: yup.string(),
})

export function useHooks(orderId) {
  const router = useRouter()
  const { order, isLoading } = useOrder(orderId)
  const { categories } = useCategories()
  const { handleError } = useHandleError()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) })

  const [updateOrder, { isLoading: isUpdating }] =
    orderApi.useUpdateOrderMutation()

  const onSubmit = async (formData) => {
    try {
      const updatedData = {
        ...formData,
        orderId: orderId,
      }
      const { order } = await updateOrder(updatedData).unwrap()
      router.push(`/orders`, order)
    } catch (error) {
      handleError(error)
    }
  }

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
