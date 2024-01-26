import { FaTasks } from "react-icons/fa";

import { capitalizeFirstLetter, formatDate } from "@/hooks/lib/util";
import { useCategories } from "@/hooks/redux/useCategories";
import { useOrders } from "@/hooks/redux/useOrders";

const useHooks = () => {
  const { orders, isLoading: ordersLoading } = useOrders();
  const { categories, isLoading: categoriesLoading } = useCategories();

  const isLoading = ordersLoading || categoriesLoading;
  const breadcrumbs = [
    {
      href: "/orders",
      title: "Orders",
      icon: FaTasks,
    },
  ];

  const headers = ["Product name", "Date", "Category", "Status", "Action"];
  const getCategoryLabel = (order) => {
    const category = categories.find((cat) => cat.id === order.category_id);
    return category ? category.label : "Unknown Category";
  };

  const formattedOrders = orders.map((order) => [
    order.brand,
    formatDate(order.created_at),
    order.category.label,
    capitalizeFirstLetter(order.status),
  ]);
  return {
    orders,
    categories,
    isLoading,
    getCategoryLabel,
    capitalizeFirstLetter,
    formattedOrders,
    breadcrumbs,
    headers,
  };
};

export default useHooks;
