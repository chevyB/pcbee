import { useCategories } from "@/hooks/redux/useCategories";
import { useOrders } from "@/hooks/redux/useOrders";

const useHooks = () => {
  const { orders, isLoading: ordersLoading } = useOrders();
  const { categories, isLoading: categoriesLoading } = useCategories();

  const isLoading = ordersLoading || categoriesLoading;

  const getCategoryLabel = (order) => {
    const category = categories.find(cat => cat.id === order.category_id);
    return category ? category.label : "Unknown Category";
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const formattedOrders = orders.map((order) => [
    order.brand,
    new Date(order.created_at).toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    getCategoryLabel(order),
    capitalizeFirstLetter(order.status),
  ]);
  console.log('Orders:', orders);
  console.log('Categories:', categories);
  return {
    orders,
    categories,
    isLoading,
    getCategoryLabel,
    capitalizeFirstLetter,
    formattedOrders,
  };
};

export default useHooks;
