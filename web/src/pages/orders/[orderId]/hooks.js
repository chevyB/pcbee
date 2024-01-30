import { useCategories } from "@/hooks/redux/useCategories";
import { useOrder, useOrders } from "@/hooks/redux/useOrders";

const useHooks = (orderId) => {
  const { orders, isLoading: ordersLoading, error: ordersError } = useOrders();
  const { order, isLoading: orderLoading, error: orderError } = useOrder(orderId);
  const { categories, isLoading: categoriesLoading } = useCategories();
  const isLoading = ordersLoading || orderLoading || categoriesLoading;

  if (ordersError || orderError || !orderId) {
    console.error("Error fetching data:", ordersError || orderError);
    return {
      orders,
      orderDetails: null,
      orderId: null,
    };
  }

  const getCategoryLabel = (order) => {
    return order.category ? order.category.label : "Unknown Category";
  };

  const getStoreLabel = (order) => {
    return order.store ? order.store.label : "Unknown Branch";
  };

  return {
    orders,
    orderDetails: order || {},
    orderId,
    isLoading,
    categories,
    getCategoryLabel,
    getStoreLabel,
  };
};

export default useHooks;
