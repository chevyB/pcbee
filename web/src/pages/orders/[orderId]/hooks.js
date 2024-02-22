import { orderApi } from '@/hooks/api/orderApi'
import { useOrder } from '@/hooks/redux/useOrders'
import { useRouter } from 'next/router'

const useHooks = (orderId) => {
  const router = useRouter()
  const { order, isLoading } = useOrder(orderId)
  const [deleteOrder, isDeleteLoading] = orderApi.useDeleteOrderMutation()

  const handleDelete = async () => {
    try {
      await deleteOrder(orderId)
      router.push(`/orders`)
    } catch (error) {
      handleError(error)
    }
  }

  return {
    order,
    isLoading,
    isDeleteLoading,
    handleDelete,
  }
}

export default useHooks
