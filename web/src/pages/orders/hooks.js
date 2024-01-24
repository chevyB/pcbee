import { useOrders } from "@/hooks/redux/useOrders"

const useHooks = () => {
  const { orders } = useOrders()

  return { orders }
}

export default useHooks
